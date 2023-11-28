user = {
    _id,
    likes: [user, product, work],
    reservations: booking,
    views: [user, product, work],
    works: [work],
    products: product
}

product = {
    _id,
    productType: service | project
}

categ = {
    _id
}

subCateg = {
    _id,
    categId: categ
}

extraService = {
    _id,
    serviceId: service
}

service = {
    _id,
    createdUser: user,
    discountFor: user,
    categId: categ,
    subCategId: subCateg,
    extraServices: [extraService],
    likes: [user]
}

project = {
    _id,
    createdUser: user,
    categId: categ,
    subCategId: subCateg,
    offers: [user],
    likes: [user]
}

disputReport = {
    _id,
    createdUser: user,
    productId: product
}

booking = {
    _id,
    productId: product,
    extraServiceId: extraService,
    disputReportId: disputReport
}

proposal = {
    _id,
    createdUser: user,
    productId: product
}

work = {
    _id,
    userId: user,
    categId: categ,
    subCategId: subCateg
}

comment = {
    _id,
    createdUser: user,
    productId: product
}

// admin
// admin notification
// admin password reset
// comment
// Comment replies
// Conversations
// Coupons
// Deposits
// Email logs
// Email smtp template
// Favorite items
// Features services
// (Front end)هنا في حاجات عن seo data و cookie data
// Gateways
// Gateways currencies
// General settings
// Language
// Messages
// Product images
// Users Password reset
// Permissions
// Rank او levels
// Review rating
// Support attachment
// Support messages
// Support tickets
// Transections
// User logins
// Withdrawals
// Withdraw methods
// Work deliveries