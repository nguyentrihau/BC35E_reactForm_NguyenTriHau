const stateDefault ={
    userList:[{
        maSV: '1',
        soDienThoai: '1241324',
        hoTen: 'sadad',
        email: '123@gmail.com',
    }
    ],
    userEdit:{
        maSV: '1',
        soDienThoai: '1241324',
        hoTen: 'sadad',
        email: '321@gmail.com',
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
            updateArr.push(action.payload)
            // state.userList = [...updateArr,action.payload];
            return {...state,userList:updateArr};
        }
        case 'SELECTED_USER': {
            const newUserSelected = action.payload;
            return {...state,userEdit:newUserSelected}
        }
        case 'UPDATE_USER':{
            let svArr = [...state.userList]
            const index = svArr.findIndex(
                (e) => e.maSV === action.payload.maSV
              );
              if (index !== -1) {
                // console.log(index);
                svArr.splice(index, 1);
                svArr.push(action.payload);
              }
              
            return {...state,userList:svArr}
        }
        case 'DELETE_USER':{
            const newUserList = state.userList.filter(e => e.maSV !== action.payload)
            return {...state,userList:newUserList}
        }
        default: return {...state}
    }
}