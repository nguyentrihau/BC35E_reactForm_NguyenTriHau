import React, { Component } from 'react'
import { connect } from 'react-redux';
import { arrSinhVien } from '../redux/reducers/userReducer';

class ReactForm extends Component {
    state = {
        values: {
            maSV: '',
            soDienThoai: '',
            hoTen: '',
            email: '',
        },
        errors: {
            maSV: '',
            soDienThoai: '',
            hoTen: '',
            email: '',
        },
        valid: false

    }
    handleChange = (e) => {
        let { name, value, type, pattern } = e.target;

        let errorMessage = '';
        //kiem tra rong
        if (value.trim() === '') {
            errorMessage = name + " không được để trống!"
        }
        //kiem tra email
        if (type === 'email' || type === 'number') {
            // console.log(pattern);
            const regex = new RegExp(pattern);
            if (!regex.test(value)) {
                errorMessage = name + ' không đúng định dạng!'
            }
        }
        if (name === 'soDienThoai') {
            const regex = new RegExp(pattern);
            if (!regex.test(value)) {
                errorMessage = name + ' không đúng định dạng'
            }
        }
        let values = { ...this.state.values, [name]: value };
        let errors = { ...this.state.errors, [name]: errorMessage };
        this.setState({
            ...this.state,
            values: values,
            errors: errors
        }, () => {
            console.log(this.state);
            this.checkValid();
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        let maSV = document.getElementById('maSV').value;
        let soDienThoai = document.getElementById('soDienThoai').value;
        let hoTen = document.getElementById('hoTen').value;
        let email = document.getElementById('email').value;
        const action = {
            type: 'ADD_USER',
            payload: { maSV, soDienThoai, hoTen, email }
        }
        this.props.dispatch(action);
    }
    handleUpdate = () =>{
        let maSV = document.getElementById('maSV').value;
        let soDienThoai = document.getElementById('soDienThoai').value;
        let hoTen = document.getElementById('hoTen').value;
        let email = document.getElementById('email').value;
        const action = {
            type: 'ADD_USER',
            payload: { maSV, soDienThoai, hoTen, email }
        }
        this.props.dispatch(action);
    }
    checkValid = () => {
        let valid = true;
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '' || this.state.values[key] === "") {
                valid = false;
            }
        }
        
        this.setState({
            ...this.state,
            valid: valid
        }, () => { console.log(valid); })
    }
    render() {
        return (
            <div className='container'>
                <form className="card mt-5" onSubmit={this.handleSubmit}>
                    <div className="card-header bg-dark text-white">
                        <h3>Thông tin sinh viên</h3>
                    </div>
                    <div className="card-body">
                        <div className="row text-left">
                            <div className="col-6">
                                <div className="form-group">
                                    <span>Mã SV</span>
                                    <input type="number" id='maSV' name='maSV' className="form-control" value={this.state.values.maSV} onChange={this.handleChange} />
                                    {this.state.errors.maSV && <div className='alert alert-danger'>{this.state.errors.maSV}</div>}
                                </div>
                                <div className="form-group">
                                    <span>Số điện thoại</span>
                                    <input type="text" id='soDienThoai' name='soDienThoai' className="form-control" value={this.state.values.soDienThoai} onChange={this.handleChange} pattern='^[0-9]*$' />
                                    {this.state.errors.soDienThoai && <div className='alert alert-danger'>{this.state.errors.soDienThoai}</div>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <span>Họ tên</span>
                                    <input type="text" id='hoTen' name='hoTen' className="form-control" value={this.state.values.hoTen} onChange={this.handleChange} />
                                    {this.state.errors.hoTen && <div className='alert alert-danger'>{this.state.errors.hoTen}</div>}
                                </div>
                                <div className="form-group">
                                    <span>Email</span>
                                    <input type="email" id='email' name='email' className="form-control" value={this.state.values.email} onChange={this.handleChange} pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$' />
                                    {this.state.errors.email && <div className='alert alert-danger'>{this.state.errors.email}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-left">
                        {this.state.valid ? <button className="btn btn-success" type='submit'>Thêm sinh viên</button> : <button className="btn btn-success" type='submit' disabled>Thêm sinh viên</button>}

                    </div>
                    {/* <div className="card-footer text-left">
                        {this.state.valid ? <button className="btn btn-success" type='submit'  onClick={()=>{
                                        const action = {
                                            type: 'EDIT_USER',
                                            payload: arrSinhVien
                                        }
                                        this.props.dispatch(action);
                        }}>UPDATE</button> : <button className="btn btn-success" type='submit' disabled>UPDATE</button> }
                    </div> */}

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    arrSinhVien:state.arrSinhVien
})
export default connect(mapStateToProps)(ReactForm)