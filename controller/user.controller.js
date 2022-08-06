


const getLoginForm = (req,res)=>{
    return res.render('login/layour')
}

const login = async(req,res)=>{}

const getSignupForm=(req,res)=>{
    return res.render('signup/layout')
}

const signup = async(req,res)=>{}

module.exports = {getLoginForm,login,getSignupForm,signup}