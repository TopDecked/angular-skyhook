import { BackendFactory } from 'dnd-core';
import { BackendTransition, TouchTransition } from 'dnd-multi-backend';
import { default as HTML5Backend } from 'react-dnd-html5-backend';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { TouchBackendOptions } from 'react-dnd-touch-backend/lib/interfaces';

import { MouseTransition, MultiBackend } from '@topdecked/angular-skyhook-multi-backend';

const backendTransitions: BackendTransition[] = [
    {
        backend: HTML5Backend,
        transition: MouseTransition,
    },
    {
        backend: (manager, context) => TouchBackend(manager, context, {
            enableMouseEvents: false,
            ignoreContextMenu: true,
            delayTouchStart: 200, // milliseconds
        } as TouchBackendOptions),
        // backend: TouchBackend,
        transition: TouchTransition,
        preview: true,
    }
];

export function customMultiBackend(): BackendFactory {
    return MultiBackend({ backends: backendTransitions });
}
