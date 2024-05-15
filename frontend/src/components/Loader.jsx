import Spinner from "react-bootstrap/Spinner"

const Loader = ({ width="100px", height="100px", border=".25em" }) => (
    <div className="loader">
        <Spinner animation='border' role='status' style={{ width: width, height: height, margin: 'auto', display: 'block', border: `${border} solid currentColor`, borderRightColor: 'transparent' }} />
    </div>
)

export default Loader