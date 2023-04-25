
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
// source: https://react-bootstrap.netlify.app/docs/components/modal/
const ModalCreateUser = (props) => {

    const { show, setShow } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [avatar, setAvatar] = useState("");

    const [previewImage, setPreviewImage] = useState("");

    const handeUploadImg = (event) => {
        // console.log('upload img', event.target.files[0]);
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setAvatar(event.target.files[0]);
        } else {
            // setPreviewImage("");
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow} >
                Launch demo modal
            </Button> */}

            <Modal
                show={show} onHide={handleClose}
                size='xl'
                backdrop='static'
                className="model-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                {/* source: https://getbootstrap.com/docs/5.0/forms/layout/ */}
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select id="inputState" className="form-select" onChange={(event) => setRole(event.target.value)}>
                                value={role}
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12 img-upload'  >
                            <label className="form-label" htmlFor='label-upload'>
                                <FcPlus />
                                Upload Avatar Image

                            </label>

                            <input type='file' hidden id='label-upload' onChange={(event) => handeUploadImg(event)} />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Image Preview</span>
                                // https://drive.google.com/drive/folders/1u43j2fL94TwJropXjqdnp_P0MBmBumKW
                                // #02: 27/
                            }

                        </div>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;