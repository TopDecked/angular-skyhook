import { BackendFactory } from 'dnd-core';
import {
  BackendTransition, default as MultiBackend, MouseTransition, TouchTransition
} from 'dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

export const HTML5ToTouch = {
    backends: [
        {
            backend: HTML5Backend,
            transition: MouseTransition
        },
        {
            backend: (manager, ctx) => TouchBackend(manager, ctx, { enableMouseEvents: false }),
            preview: true,
            transition: TouchTransition
        }
    ] as BackendTransition[]
};

export function createDefaultMultiBackend(): BackendFactory {
    return (manager, ctx) => MultiBackend(HTML5ToTouch)(manager, ctx);
}
