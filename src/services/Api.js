import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "./data"



class Api {
    constructor(){
        const useMock = import.meta.env.VITE_APP_USE_MOCK
        if(useMock === 'true'){
            return new ApiMock()
        }
        return new ApiFetch()
    }


}

class ApiFetch {

    getUserData(id){
        return fetch('http://localhost:3000/user/' + id)
        .then(resp => resp.json())
    }

    getUserAverageSession(id){
        return fetch('http://localhost:3000/user/' + id + '/average-sessions')
        .then(resp => resp.json())
    }

    getUserPerformance(id){
        return fetch('http://localhost:3000/user/' + id + '/performance')
        .then(resp => resp.json())
    }

    getUserActivity(id){
        return fetch('http://localhost:3000/user/' + id + '/activity')
        .then(resp => resp.json())
    }

}

class ApiMock {
    getUserData(id){        
        return Promise.resolve({
            data: USER_MAIN_DATA.find(data => data.id === id)
        })
    }

    getUserAverageSession(id){
        return Promise.resolve({
            data: USER_AVERAGE_SESSIONS.find(data => data.userId === id)
        })
    }

    getUserPerformance(id){
        return Promise.resolve({
            data: USER_PERFORMANCE.find(data => data.userId === id)
        })
    }

    getUserActivity(id){
        return Promise.resolve({
            data: USER_ACTIVITY.find(data => data.userId === id)
        })
    }
}

export default Api;