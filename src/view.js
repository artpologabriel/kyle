
    db.collection('users').findOne({ name: 'Andrew' }, (error , user)=>{
        if (error){
            return console.log('unable to fetch')
        }
        console.log(user)
})