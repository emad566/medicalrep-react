import { Action } from 'redux';
import {
    ADD_COSTOMIZER,
    ADD_LAYOUT,
    ADD_SIDEBAR_TYPES,
    ADD_SIDEBAR_SETTINGS,
    ADD_COLOR,
    ADD_MIXlAYOUT
} from '../actionTypes';
import ConfigDB from '../../data/customizer/config';

interface CustomAction extends Action {
    type: string;
    payload: any; // Define the payload type according to your needs
}

interface State {
    customizer: any; // Assuming customizer property can have various shapes
    configData: any;
    layout: string;
    sidebar_types: any; // Assuming sidebar_types property can have various shapes
    settings: string;
    color: any; // Assuming color property can have various shapes
    mix_layout: string;
    loading: boolean;
}

const initialState: State = {
    customizer: ConfigDB.data,
    configData: {},
    layout: 'ltr',
    sidebar_types: {},
    settings: '',
    color: {},
    mix_layout: '',
    loading: false
};

const customizerReducer = (state: State = initialState, action: CustomAction): State => {
    switch (action.type) {
        case ADD_COSTOMIZER:
            return { ...state, loading: false, customizer: ConfigDB.data };

        case ADD_LAYOUT:
            const layoutUpdate = action.payload;
            state.customizer.settings.layout_type = layoutUpdate;
            return { ...state, loading: true, layout: layoutUpdate };

        case ADD_SIDEBAR_TYPES:
            const sidebarTypeUpdate = action.payload;
            state.customizer.settings.sidebar = sidebarTypeUpdate;
            return { ...state, loading: true, sidebar_types: sidebarTypeUpdate };

        case ADD_SIDEBAR_SETTINGS:
            const settingsUpdate = action.payload;
            state.customizer.settings.sidebar_setting = settingsUpdate;
            return { ...state, loading: true, settings: settingsUpdate };

        case ADD_COLOR:
            const colors = action.payload;
            state.customizer.color.primary_color = colors.primary_color;
            state.customizer.color.secondary_color = colors.secondary_color;
            state.customizer.color.color = colors.color;
            state.customizer.color.layout_version = colors.layout_version;
            return { ...state, color: colors, loading: true };

        case ADD_MIXlAYOUT:
            const mixLayout = action.payload;
            state.customizer.color.mix_layout = mixLayout;
            return { ...state, mix_layout: mixLayout, loading: true };

        default:
            return state;
    }
};

export default customizerReducer;