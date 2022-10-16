import React, {useRef} from 'react';

interface TodoFormProps {
    onAdd(title:string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }

    return (
        <div className='form'>
            <input className='title'
                type='text' 
                placeholder="Enter your tasks"
                ref={ref}
                onKeyPress={keyPressHandler}/>
        </div>
    )
}

export default TodoForm;