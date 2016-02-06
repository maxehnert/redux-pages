import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import Footer from '../../components/Todos/Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const metaData = {
  title: 'Redux blah',
  description: 'Start you project easy and fast with modern tools.',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

// const Todo = () => (
//   <section>
//     <DocumentMeta {...metaData} />
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </section>
// )
//
// export default Todo;

export class Todo extends Component {

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </section>
    );
  }
}
