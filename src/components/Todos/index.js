import React from 'react';
import Footer from '../components/Todos/Footer';
import AddTodo from '../cont/todos';

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
export class Todo extends Component  {
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
