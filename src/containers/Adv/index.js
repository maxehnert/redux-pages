import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

const metaData = {
  title: 'Redux Adv',
  description: 'Start you project easy and fast with modern tools.',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

// @connect(
//   state => state.items,
//   dispatch => bindActionCreators(actionCreators, dispatch)
// )
export class Adv extends Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <div className="container">
          words
        </div>
      </section>
    )
  }
}
