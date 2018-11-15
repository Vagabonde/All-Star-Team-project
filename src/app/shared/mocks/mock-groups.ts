import {Group} from '../../interface/group.interface'
import {LESSONS} from './mock-lessons';

export const GROUPS: Group[] = [
    {id: 'FE', name: 'Front-end', img: 'JS.png', lessons: LESSONS},
    {id: 'BA', name: 'Business analysis', img: 'angular.png', lessons: []},
];