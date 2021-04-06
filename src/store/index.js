import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        informations: [],
        baseInfos: [],
        infos: [],
        info: [],
        pagingInfo: [],
        infoLength: 0,
        infoPaging: 0,
        max: 0,
        min: 0,
        specialVideo: [],
    },
    mutations: {

        accessData(state, { result }) {
            debugger;
            state.baseInfos = result.data;
            state.infos = state.baseInfos;
            state.infoLength = state.infos.length;
            state.infoPaging = Math.ceil(state.infoLength / 9);
            let firstLoad = root.$route.query.page;
            console.log(firstLoad);
            if (root.$route.name === 'Grid') {
                if (firstLoad) {
                    state.max = 9 * firstLoad;
                    state.min = 9 * (firstLoad - 1);
                } else {
                    state.max = 9;
                    state.min = 0;
                    root.$router.push({ path: '/', query: { page: 1 } });
                }

                state.pagingInfo = state.infos.slice(state.min, state.max);

                console.log(state.pagingInfo);

                state.informations = [];
                for (let key in state.pagingInfo) {
                    state.info = state.pagingInfo[key];

                    state.informations.push(state.info);
                }
                // alert(state.informations);
            }
        },
        routeWithBtn(state, index) {
            debugger;
            state.max = 9 * (index + 1);
            state.min = 9 * index;
            state.pagingInfo = state.infos.slice(state.min, state.max);

            state.informations = [];
            for (let key in state.pagingInfo) {
                state.info = state.pagingInfo[key];

                state.informations.push(state.info);
            }
        },

        showingVideo(state, {
            id,
            result
        }) {
            debugger;
            state.baseInfos = result.data;
            state.infos = state.baseInfos;
            state.infos.map(item => {
                console.log(item);

                if (item.ID == id) {
                    return (state.specialVideo = item, console.log(state.specialVideo))

                }

            })

        },

        searching(state, search) {
            state.infos = []
            debugger;
            state.infos = state.baseInfos.filter(element => element.Title.includes(search));

            state.infoLength = state.infos.length;
            state.infoPaging = Math.ceil(state.infoLength / 9);
            let firstLoad = root.$route.query.search_result;
            console.log(firstLoad);
            if (root.$route.name === 'Grid') {
                if (firstLoad) {
                    state.max = 9 * firstLoad;
                    state.min = 9 * (firstLoad - 1);
                } else {
                    state.max = 9;
                    state.min = 0;
                    root.$router.push({ path: '/', query: { search_result: 1 } });
                }

                state.pagingInfo = state.infos.slice(state.min, state.max);

                console.log(state.pagingInfo);

                state.informations = [];
                for (let key in state.pagingInfo) {
                    state.info = state.pagingInfo[key];

                    state.informations.push(state.info);
                }
            }

        }
    },
    actions: {

        async accessData({ commit }) {
            debugger;
            var result = await axios.get("/json/YoutubeData.json")
            commit('accessData', { result })

        },
        routeWithBtn({ commit }, index) {
            commit('routeWithBtn', index);
        },
        searching({ commit }, search) {
            commit('searching', search);
        },
        async showingVideo({ commit }, id) {
            var result = await axios.get("/json/YoutubeData.json")
            commit('showingVideo', {
                id,
                result
            });
        },


    },
    getters: {
        informations: state => {
            return state.informations;
        },
        infoPaging: state => {
            return state.infoPaging;
        },
        baseInfos: state => {
            return state.baseInfos;
        },
        specialVideo: state => {
            return state.specialVideo;
        },

    },
    modules: {}
})