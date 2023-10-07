import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoButton } from '../TodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm'


function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />

          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

      <TodoButton setOpenModal={setOpenModal}/>
      {openModal && (
      <Modal>
        <TodoForm/>
      </Modal>
      )}
    </>
  );
}

export { AppUI };