import {Query} from '../../model/query';

export const DEMO_QUERIES_ANGULAR: Query[] = [
  {
    name: 'Open Issues',
    view: 'list',
    dataType: 'issue',
    viewerState: {views: ['title', 'reporter', 'state', 'updatedDate', 'labels']},
    filtererState: {
      filters: [{id: 'state', type: 'state', state: 'open', equality: 'is'}],
      search: ''
    },
    grouperState: {group: 'all'},
    sorterState: {sort: 'created', reverse: true},
    group: 'My Saved Queries',
  },
  {
    name: 'Top Open Issues by Reaction',
    view: 'list',
    dataType: 'issue',
    viewerState: {views: ['title', 'reporter', 'state', 'updatedDate', 'labels']},
    filtererState: {
      filters: [{id: 'state', type: 'state', state: 'open', equality: 'is'}],
      search: ''
    },
    grouperState: {group: 'all'},
    sorterState: {sort: 'plusOneReactions', reverse: true},
    group: 'My Saved Queries',
  },
  {
    name: 'Needs Labels',
    view: 'list',
    dataType: 'issue',
    viewerState: {views: ['title', 'reporter', 'state', 'updatedDate', 'labels']},
    filtererState: {
      filters: [
        {id: 'recommendation', type: 'state', state: 'at least one warning', equality: 'is'}
      ],
      search: ''
    },
    grouperState: {group: 'all'},
    sorterState: {sort: 'created', reverse: true},
    group: 'Triage',
  }
];
