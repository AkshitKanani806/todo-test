import React, { useState } from "react";
import { Form } from 'semantic-ui-react'
import { connect } from "react-redux";
import { addTodo } from "../redux/action";

const TodoForm = ({ addTodo }) => {
    const [data, setData] = useState({})

    const handleChange = (e, { name, value }) => {
        setData({ ...data, [name]: value })
    }

    const handleSubmit = () => {
        if (data.header) {
            addTodo({ ...data, isTaskComplete: false, id: Date.now() })
            setData({})
        }
    }

    return (

        <Form className="todo-form" onSubmit={handleSubmit}>
            <Form.Input
                placeholder='Header'
                name='header'
                value={data.header || ''}
                onChange={handleChange}
            />
            <Form.Input
                placeholder='Description'
                name='description'
                value={data.description || ''}
                onChange={handleChange}
            />
            <Form.Button content='Submit' />
        </Form>
        
    )
}

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
});
const mapStateToProps = ({ selected }) => ({
    selected
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm);
