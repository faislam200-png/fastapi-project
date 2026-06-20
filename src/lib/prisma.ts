
const createMany = await prisma.user.createMany({
    data: [
        { name: "Fahim", email: "a@prisma.io"},
        { name: "kabir", email: "b@prisma.io"}
    ],
    skipDuplicates: true //for skipping duplicate fields

});


const users = await prisma.user.createManyAndReturn(
    {
        data: [
            { name: "fahad", email: "f@gmail.com"},
            { name: "kallan", email: "kall@prisma.io"}
        ],
    }
)

const users = await prisma.user.createManyAndReturn(
    {
        data : [
            {name: 'a', age= 25},
            {name: 'b', age= 23}
        ]
    }
)

const user = await prisma.user.findUnique({
    where: { email: "elsa@prisma.io"},
})

// By ID

const user = await prisma.user.findUnique({
    where: {id: 99},
});


const users= await prisma.user.findMany()

const users = await prisma.user.findMany() 



const users = await prisma.user.findMany({
    where: {
            OR: [{ name : { startsWith: "A"}}, { AND : { profileViews: {gt:0}, role : "ADMIN"}}],

    }
});


const users = await  prisma.user.findMany({
    where: {
        email: {endWith: "prisma.io"},
        posts : { some: {published: false }}
    }
})