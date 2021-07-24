interface Meet {

}

interface ResGetMeetApi extends Res {
    data: {
        meet: Meet
    }
};

interface ResGetMeet extends ActionRedux {
    payload: ResMeetApi
}