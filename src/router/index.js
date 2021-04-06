import Grid from '../components/Grid.vue'
import Video from '../components/Card/Video/Video.vue'

export const routes = [{
        path: '/',
        name: "Grid",
        component: Grid,
    },
    {
        path: '/video/:id',
        name: "Video",
        component: Video,
        props: route => ({ id: route.params.id })
    },
    {
        path: '*',
        redirect: { name: "Grid", query: { page: 1 } }
    }
]