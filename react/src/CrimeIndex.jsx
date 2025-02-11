import { Component } from "react";
import axios from "axios";

class CrimeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crime: [],
            loading: true,
            error: null,
        };
    }

    fetchCrimes() {
        axios
            .get("/api/crime")
            .then((response) => {
                // Access the `data` key from the response
                const crime = Array.isArray(response.data.data)
                    ? response.data.data
                    : [];
                this.setState({ crime, loading: false, error: null });
                console.log("API Response:", response.data); // Log the full response
                console.log("Companies Data:", crime); // Log the extracted array
            })
            .catch((error) => {
                console.error("Error fetching crime:", error);
                this.setState({
                    error: "Failed to fetch crime. Please try again later.",
                    loading: false,
                });
            });
    }

    deleteCrime = (event) => {
        if (!window.confirm("Are you sure you want to delete this company?")) {
            return;
        }
        axios
            .delete(`/api/crime/${event.target.value}`)
            .then((response) => this.fetchcrime())
            .catch((error) => console.log(error));
    };

    componentDidMount() {
        this.fetchCrimes();
    }

    renderCompanies() {
        const { crime } = this.state;

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
                        onClick={this.deleteCrime}
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
        const { loading, error } = this.state;

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
                        <tbody>{this.renderCompanies()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CrimeIndex;
