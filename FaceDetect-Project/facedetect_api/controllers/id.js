const handleId= (req, res, db, bcrypt)=>{
    const {id} = req.params;
    db.select('*').from('users').where({id}).then(user=>{
        if(user.length === 0){
            return res.status('404').json('not found');
        }
        res.json(user[0]);
    })
}

module.exports = {
    handleId: handleId
};