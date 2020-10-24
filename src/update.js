const updatePromise = db.collection('users').updateOne({
    _id: new mongodb.ObjectID('5f93e92d3d1d6e15503540e0')
},{
    $set: {
        name: 'kyle'
    }
})

updatePromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})