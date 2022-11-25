import React, { Component } from 'react'
import { connect } from 'react-redux'
import { arrSinhVien } from '../redux/reducers/userReducer'

class Reactlist extends Component {
    state={
        keyword:'',
    }
    renderSinhVien = () => {
        console.log(this.props.arrSinhVien.userList);
        let data = this.props.arrSinhVien.userList.filter(e => {
            return e.hoTen.toLowerCase().trim().indexOf(this.state.keyword.toLowerCase().trim()) !== - 1
        })
    
        return data.map((sinhvien, index) => {
            return (
                <tr key={index}>
                    <td>{sinhvien.maSV}</td>
                    <td>{sinhvien.hoTen}</td>
                    <td>{sinhvien.soDienThoai}</td>
                    <td>{sinhvien.email}</td>
                    <td>
                        <button className="btn btn-info mr-2" onClick={()=>{
                            const action = {
                                type:'SELECTED_USER',
                                payload:sinhvien,
                            };
                            this.props.dispatch(action);
                            // console.log(sinhvien);
                        }}>EDIT</button>
                        <button className="btn btn-danger" onClick={()=>{
                            const action = {
                                type:'DELETE_USER',
                                payload:sinhvien.maSV,
                            };
                            this.props.dispatch(action);
                            // console.log(sinhvien);
                        }}>DELETE</button>
                    </td>

                </tr>
            )
        })
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className='container'>
                <div className=" mt-4 py-1 bg-primary ">
                    <div className="row">
                        <div className="ml-2 col-4 form-group mb-0">
                            <input
                                type="text"
                                placeholder="Tìm theo tên sinh viên ....."
                                className="form-control"
                                onChange={this.handleChange}
                                name="keyword"
                            />
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Mã SV</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    arrSinhVien:state.arrSinhVien,
    // arrSinhVien:state.arrSinhVien.userEdit,
})
export default connect(mapStateToProps)(Reactlist)