export default {
    mongodb: {
        dbpath: 'mongodb://localhost/blog',
    },
    jwt: {
        secret: 'blog',
        expiresIn: '5400s' //token时间设置为1.5h
    },
}