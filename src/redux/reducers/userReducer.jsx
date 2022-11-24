const stateDefault ={
    userList:[{
        maSV: '1',
        soDienThoai: '1241324',
        hoTen: 'sadad',
        email: '@fsdaf',
    }
    ],
    userEdit:{
        maSV: '1',
        soDienThoai: '1241324',
        hoTen: 'sadad',
        email: '@fsdaf',
    }
}
export const arrSinhVien = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            let updateArr = [...state.userList]
            let index = updateArr.findIndex(e => e.maSV === action.payload.maSV);
            if(index !== -1){
                alert('Trùng MaSV');
                return {...state};
            }
            // updateArr.push(action.payload)
            state.userList = [...updateArr,action.payload];
            return {...state};
        }
        case 'SELECTED_USER': {
            state.userSelected = action.payload;
            return {...state}
        }
        case 'EDIT_USER':{
            // let editArr = [...state]
            state = state.userList.map(e => e.maSV === action.payload.maSV ? action.payload : e)
            return {...state}
        }
        case 'DELETE_USER':{
            state = state.userList.filter(e => e.maSV !== action.payload)
            return {...state}
        }
        default: return {...state}
    }
}