async function updateOrCreateUser(data, roleCode, t) {
    const userModal = await db.getDBModel('user');

    console.log(data.email, data.phone);
    let row23 = await userModal.findOne({
        where: {
            [Sequelize.Op.or]: [ { email: data.email }, {mobile: data.phone}]
        }
    }).then(async (user) => {
        if(user) {
            console.log('user already present ====> ', user.user_id, user.first_name, user.email)
            return user;
        } else {
            return userModal.create({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                mobile: data.phone
            })
        }
    });
    console.log('row23 =============> ', row23.user_id, row23.first_name);


    // // there is also updateOnDuplicate ---> see that
    // let res222 = await userModal.bulkCreate([
    //     { first_name: 'edo firstName1', last_name: 'lastName22222', email: data.email, mobile: data.phone },
    //     { first_name: 'edo firstName2', last_name: 'lastName22222', email: data.email, mobile: data.phone },
    //     { first_name: 'edo firstName3', last_name: 'lastName22222', email: data.email, mobile: data.phone }
    // ], {ignoreDuplicates: true})
    // console.log('res222 =======> ', res222);


    // const [row, isCreated] = await userModal.upsert({
    //     email: data.email,
    //     first_name: 'newFirstName_upddd',
    //     last_name: 'newLastName_upddd',
    //     mobile: data.phone
    // }, {conflictFields: ['email', 'mobile'], logging:console.log})

    // const [row, isCreated] = await userModal.findOrCreate({
    //     where: {
    //         [Sequelize.Op.or]: [ { email: data.email }, {mobile: data.phone}]
    //     }
    // });

    // console.log('row, isCreated ====> ', row, isCreated);
}