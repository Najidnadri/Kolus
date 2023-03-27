import type { Module } from "vuex";

export declare type FeedType = 'foryou' | 'following';

interface StateType {
    feedType: FeedType,
}



const store: Module<StateType, any> = {
    namespaced: true,
    state() {

        let state: StateType = {
            feedType: 'foryou'
        }
        return state
    },

    mutations: {
        changeFeed(state, feed: FeedType) {
            state.feedType = feed;
        }
    }
}

export default store;