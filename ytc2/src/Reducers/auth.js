const authReducer=(state={data:null},actions)=>{
    switch(actions.type){
        case 'AUTH':
                localStorage.setItem('Profile',JSON.stringify({...actions?.data}))
                return {...state,data:actions?.data}
            // break;
        default:
            return state;
            // break;
    }
}
export default authReducer