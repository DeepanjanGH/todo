import React, {useEffect, useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

const  AddTodo = ({
    isEdit,
    editData,
    editRowIndex
}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [header, setHeader] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(isEdit) {
            setHeader(editData.heading);
            setDescription(editData.description);
        }
    }, [isEdit,editData])
    return (
      <TodoContext.Consumer>
        {
          ({onSave}) => {
            return (
              <>
              <Button  variant={isEdit ? "outline-primary" : "primary"} className={isEdit ? "isEdit-button" : ""} onClick={handleShow}>
                  {isEdit ? "Edit" : "Add To Do"}
                  </Button>
            
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                      <Modal.Title>{isEdit ? "Edit" : "Add To Do"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                          <Form.Group className="mb-3" controlId="todo-heading">
                              <Form.Label>Header</Form.Label>
                              <Form.Control type="text" 
                              placeholder="" 
                              onChange={(e) => setHeader(e.target.value)}
                              value={header}
                              />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="todo-description">
                              <Form.Label>Description</Form.Label>
                              <Form.Control 
                              as="textarea" 
                              type="text" 
                              placeholder="enter description"
                              onChange={e => setDescription(e.target.value)}
                              value={description}
                              />
                          </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => {
                          handleClose()
                          onSave({
                              heading: header,
                              description: description,
                              time: new Date().getTime(),
                              isEdited: isEdit ? isEdit : false,
                              id: Math.floor(100000 + Math.random() * 900000),
                          }, isEdit, editRowIndex)
                      }}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
              </>
            )
          }
        }
        
      </TodoContext.Consumer>
    );
  }
  
export default AddTodo