import icons from "./icons"
const { MdOutlineLibraryMusic,
    MdOutlineFeed,
    TbChartArcs,
    RiCompassDiscoverFill } = icons;
//using array to mapping over

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        end: true,
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <RiCompassDiscoverFill size={24} />
    },
    {
        path: 'zing-chart',
        text: '#Zingchar',
        end: true,
        icons: <TbChartArcs size={24} />
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        end: true,
        icons: <MdOutlineFeed size={24} />
    },
]