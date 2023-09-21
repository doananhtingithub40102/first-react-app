const ErrorModal = ({ isOpenModal, setIsOpenModal }) => {
    return (
        // The Modal
        <div id="myModal" className="modal" hidden={!isOpenModal}>
            <div className="modal-dialog">
                {/* Modal content */}
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <h2>City not found</h2>
                        <span className="close" onClick={() => setIsOpenModal(false)}>&times;</span>
                    </div>

                    {/* Modal Body */}
                    <div className="modal-body">
                        <p>Please check and enter a valid city.</p>
                    </div>

                    {/* Modal Footer */}
                    <div className="modal-footer">
                        <button type="button" onClick={() => setIsOpenModal(false)}>OK, got it!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal