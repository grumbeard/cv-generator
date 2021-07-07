import '../styles/components/buttons.css'

function EditButton(props) {
  return(
    <div className="edit-btn btn-container" onClick={props.onClick} key={props.keyValue}>
      <span className="edit-btn btn material-icons-outlined">edit</span>
    </div>
  )
}


function SaveButton(props) {
  return(
    <div className="save-btn btn-container" onClick={props.onClick} key={props.keyValue}>
      <span className="save-btn btn material-icons-outlined">save</span>
    </div>
  )
}


function CancelButton(props) {
  return(
    <div className="cancel-btn btn-container" onClick={props.onClick} key={props.keyValue}>
      <span className="cancel-btn btn material-icons-outlined">edit_off</span>
    </div>
  )
}

function AddButton(props) {
  return(
    <div className="add-btn btn-container" onClick={props.onClick} key={props.keyValue}>
      <span className="add-btn btn material-icons-outlined">add</span>
    </div>
  )
}

function DeleteButton(props) {
  return(
    <div className="delete-btn btn-container" onClick={props.onClick} key={props.keyValue}>
      <span className="delete-btn btn " data-id={props.id}>delete</span>
    </div>
  )
}


export { EditButton, SaveButton, CancelButton, AddButton, DeleteButton }
