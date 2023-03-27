import type { Module } from "vuex";

export interface Noti {
    message: string,
    class?: string[],
    id: number,
    timeout: number
}

interface AddNotiParam {
    msg: string,
    class?: string[],
    duration?: number,
}

interface StateType {
    notifications: Noti[],
}



const store: Module<StateType, any> = {
    namespaced: true,
    state() {

        let state: StateType = {
            notifications: []
        }
        return state
    },

    mutations: {
        addNoti(state, params: AddNotiParam) {
            let id = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000)
            let item = {
                message: params.msg,
                class: params.class,
                id: id,
                timeout: setTimeout(() => {
                    state.notifications.forEach((notification, index) => {
                        if (notification.id === id) {
                            clearTimeout(notification.timeout);
                            state.notifications.splice(index, 1);
                        }
                    })
                }, params.duration ? params.duration : 6000)
            }
            state.notifications.push(item);

        },
        removeNoti(state, id: number) {
            state.notifications.forEach((notification, index) => {
                if (notification.id === id) {
                    clearTimeout(notification.timeout);
                    state.notifications.splice(index, 1);
                }
            })
        },
        removeTimeout(state, id: number) {
            state.notifications.forEach((notification, index) => {
                if (notification.id === id) {
                    clearTimeout(notification.timeout);
                }
            })
        },
        newTimeout(state, id: number) {
            state.notifications.forEach((notification, index) => {
                if (notification.id === id) {
                    // notification.timeout = setTimeout(() => {
                    //     state.notifications.forEach((notification, index) => {
                    //         if (notification.id === noti) {
                    //             clearTimeout(notification.timeout);
                    //             state.notifications.splice(index, 1);
                    //         }
                    //     })
                    // }, 4000)
                }
            })
        }
    }
}

export default store;