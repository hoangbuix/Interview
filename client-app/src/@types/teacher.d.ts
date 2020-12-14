interface Teacher {
    _id: string;
    teacherName: string;
    description: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

interface ResGetTeacherApi extends Res {
    data: {
        teacher: any
    }
}

// interface ResGetProduct extends ActionRedux {
//     payload: ResGetProductApi
// }

// interface ResGetProductItemApi extends Res {
//     data: {
//         product: Product
//     }
// }

// interface ResGetProductItem extends ActionRedux {
//     payload: ResGetProductItemApi
// }