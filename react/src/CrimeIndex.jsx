import { Component } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/crime";

class CrimeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crime: [],
            loading: true,
            error: null,
            formData: {
                year: "",
                month: "",
                day: "",
                description: "",
            },
            editId: null,
        };
    }

    // Fetch all crime
    fetchCrime = async () => {
        try {
            const response = await axios.get("/api/crime");

            // Data processing logic from the second code
            const crime = Array.isArray(response.data.data)
                ? response.data.data
                : [];

            // Update state with the processed data
            this.setState({ crime, loading: false, error: null });

            // Optional: Log the response and processed data for debugging
            console.log("API Response:", response.data);
            console.log("Processed Crime Data:", crime);
        } catch (error) {
            console.error("Error fetching crime:", error);

            // Update state to reflect the error
            this.setState({
                error: "Failed to fetch crime. Please try again later.",
                loading: false,
            });
        }
    };

    // Handle form input changes
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            },
        }));
    };

    // Create or update a crime
    handleSubmit = async (e) => {
        e.preventDefault();
        const { formData, editId } = this.state;
        try {
            if (editId) {
                // Update existing crime
                await axios.put(`${API_URL}/${editId}`, formData);
            } else {
                // Create new crime
                await axios.post(API_URL, formData);
            }
            this.fetchCrime(); // Refresh the list
            this.setState({
                formData: { year: "", month: "", day: "", description: "" }, // Reset form
                editId: null, // Reset edit mode
            });
        } catch (error) {
            console.error("Error saving crime:", error);
        }
    };

    // Edit a crime
    handleEdit = (crime) => {
        this.setState({ formData: crime, editId: crime.id });
    };

    handleCrime = async (event) => {
        if (!window.confirm("Are you sure you want to delete this crime?")) {
            return;
        }

        try {
            await axios.delete(`/api/crime/${event.target.value}`);
            this.fetchCrime(); // Assuming this.fetchCrime() is a method to refresh the crime list
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.fetchCrime();
    }

    renderCrime() {
        const { crime, formData, editId } = this.state;

        if (crime.length === 0) {
            return (
                <tr>
                    <td
                        colSpan="4"
                        className="px-6 py-4 text-sm leading-5 text-center text-gray-900"
                    >
                        No crime found.
                    </td>
                </tr>
            );
        }

        return crime.map((crime) => (
            <tr key={crime.id}>
                <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                    {crime.id}
                </td>
                <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                    {crime.year}
                </td>
                <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                    {crime.month}
                </td>
                <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                    {crime.day}
                </td>
                <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                    {/* <a
                        href={crime.website}
                        target="_blank"
                        rel="noopener noreferrer"
                    > */}
                    {crime.street}
                    {/* </a> */}
                </td>
                <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                    {crime.description}
                </td>
                <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                    <button
                        value={crime.id}
                        onClick={this.handleCrime}
                        type="button"
                        className="bg-gray-800 hover:bg-gray-700 rounded-md text-white px-4 py-2 font-semibold ease-in-out duration-150"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        const { crime, formData, editId, loading, error } = this.state;

        if (loading) {
            return <div className="p-6 text-center">Loading...</div>;
        }

        if (error) {
            return <div className="p-6 text-center text-red-500">{error}</div>;
        }

        return (
            <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
                <div className="min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-200 border">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                                        Name
                                    </span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                                        Email
                                    </span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                                        Address
                                    </span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                                        Street
                                    </span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                                        Description
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>{this.renderCrime()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CrimeIndex;
