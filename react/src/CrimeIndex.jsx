import { Component } from "react";
import axios from "axios";

const API_URL = "/api/crime";

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
                street: "",
                description: "",
            },
            editId: null,
            search: { search: "" },
        };
    }

    // Fetch all crime
    fetchCrime = async () => {
        try {
            const response = await axios.get(API_URL);

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
        if (name === "search") {
            this.setState((prevState) => ({
                search: {
                    ...prevState.search,
                    [name]: value,
                },
            }));
        } else {
            this.setState((prevState) => ({
                formData: {
                    ...prevState.formData,
                    [name]: value,
                },
            }));
        }
    };

    handleSearch = async (e) => {
        e.preventDefault();
        const { search } = this.state;

        try {
            const response = await axios.get(`${API_URL}/search?query`, {
                params: { query: search.search },
            });

            const crime = Array.isArray(response.data.data)
                ? response.data.data
                : [];

            this.setState({ crime, loading: false, error: null });
            console.log("Search Response:", response.data);
        } catch (error) {
            console.error("Error searching crime:", error);
            this.setState({
                error: "Failed to search crime. Please try again later.",
                loading: false,
            });
        }
    };

    // Create or update a crime
    handleSubmit = async (e) => {
        e.preventDefault();
        const { formData, editId } = this.state;

        // Validate year, month, and day
        if (
            isNaN(formData.year) ||
            isNaN(formData.month) ||
            isNaN(formData.day)
        ) {
            this.setState({
                error: "Year, Month, and Day must be valid numbers.",
            });
            return;
        }

        try {
            if (editId) {
                await axios.put(`${API_URL}/${editId}`, formData);
            } else {
                await axios.post(API_URL, formData);
            }
            this.fetchCrime();
            this.setState({
                formData: {
                    year: "",
                    month: "",
                    day: "",
                    street: "",
                    description: "",
                },
                editId: null,
            });
        } catch (error) {
            console.error("Error saving crime:", error);
            this.setState({
                error: "Failed to save crime. Please try again later.",
            });
        }
    };

    // Edit a crime
    handleEdit = (crime) => {
        this.setState({ formData: crime, editId: crime.id });
    };

    handleDelete = async (event) => {
        if (!window.confirm("Are you sure you want to delete this crime?")) {
            return;
        }

        try {
            await axios.delete(`/api/crime/${event.target.value}`);
            this.fetchCrime(); // Refetch the crime list after deletion
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.fetchCrime();
    }

    renderCrime() {
        const { crime } = this.state;

        if (crime.length === 0) {
            return (
                <tr>
                    <td
                        colSpan="7" // Adjust colspan to match the number of columns
                        className="px-6 py-4 text-sm leading-5 text-center text-gray-900"
                    >
                        No crime found.
                    </td>
                </tr>
            );
        }

        return null; // Return null if there are crimes to avoid rendering extra rows
    }

    render() {
        const { crime, formData, search, editId, loading, error } = this.state;

        if (loading) {
            return <div className="p-6 text-center">Loading...</div>;
        }

        if (error) {
            return <div className="p-6 text-center text-red-500">{error}</div>;
        }

        return (
            <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
                <div className="min-w-full align-middle">
                    <form onSubmit={this.handleSearch}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            value={search.search}
                            onChange={this.handleInputChange}
                            required
                        />
                        <button type="submit">Search</button>
                    </form>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="year"
                            placeholder="Year"
                            value={formData.year}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="month"
                            placeholder="Month"
                            value={formData.month}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="day"
                            placeholder="Day"
                            value={formData.day}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="text"
                            name="street"
                            placeholder="street"
                            value={formData.street}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={this.handleInputChange}
                        />
                        <button type="submit">
                            {editId ? "Update" : "Create"}
                        </button>
                    </form>

                    <table className="min-w-full divide-y divide-gray-200 border">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                                        ID
                                    </span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                                        Year
                                    </span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                                        Month
                                    </span>
                                </th>
                                <th className="px-6 py-3 bg-gray-50">
                                    <span className="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">
                                        Day
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
                        <tbody>
                            {crime.length === 0
                                ? this.renderCrime() // Render "No crime found" if the array is empty
                                : crime.map(
                                      (
                                          crimeItem // Render the list of crimes if the array is not empty
                                      ) => (
                                          <tr key={crimeItem.id}>
                                              <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                                                  {crimeItem.id}
                                              </td>
                                              <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                                                  {crimeItem.year}
                                              </td>
                                              <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                                                  {crimeItem.month}
                                              </td>
                                              <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                                                  {crimeItem.day}
                                              </td>
                                              <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                                                  {crimeItem.street}
                                              </td>
                                              <td className="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                                                  {crimeItem.description}
                                              </td>
                                              <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                                                  <button
                                                      value={crimeItem.id}
                                                      onClick={() =>
                                                          this.handleEdit(
                                                              crimeItem
                                                          )
                                                      }
                                                      type="button"
                                                      className="bg-blue-800 hover:bg-blue-700 rounded-md text-white px-4 py-2 font-semibold ease-in-out duration-150"
                                                  >
                                                      Edit
                                                  </button>
                                                  <button
                                                      value={crimeItem.id}
                                                      onClick={
                                                          this.handleDelete
                                                      }
                                                      type="button"
                                                      className="bg-gray-800 hover:bg-gray-700 rounded-md text-white px-4 py-2 font-semibold ease-in-out duration-150"
                                                  >
                                                      Delete
                                                  </button>
                                              </td>
                                          </tr>
                                      )
                                  )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CrimeIndex;
