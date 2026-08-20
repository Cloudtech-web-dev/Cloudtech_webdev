
import { useEffect, useReducer } from "react";
import storeReducer, { initialStore } from "../../store";

const fetchAllLeads = async (dispatch) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
    dispatch({ type: 'GET_ALL_LEADS_START' })
    try {
        const response = await fetch(`${backendUrl}/api/leads`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken') ?? ''}`
            }
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al obtener los leads");
        }
        const leadsData = await response.json();
        dispatch({ type: 'GET_ALL_LEADS_SUCCESS', payload: leadsData })
    } catch (error) {
        console.error("Error fetching leads:", error);
        dispatch({ type: 'GET_ALL_LEADS_FAILURE', payload: error.message })
    }
}

export const Leads = () => {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    useEffect(() => {
        fetchAllLeads(dispatch);
    }, [dispatch])

    const { leads, leadsFetchStatus } = store;

    if (leadsFetchStatus.status === 'loading') {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Cargando leads...</span>
                </div>
            </div>
        )
    }

    if (leadsFetchStatus.status === 'error') {
        return (
            <div className="alert alert-danger" role="alert">
                Error al cargar los leads: {leadsFetchStatus.error}
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {leads.length === 0 ? (
                        <p className="text-white">No se encontraron leads</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-warning" scope="col">#</th>
                                    <th className="text-warning" scope="col">Necesidad</th>
                                    <th className="text-warning" scope="col">Etapa</th>
                                    <th className="text-warning" scope="col">Mensaje</th>
                                    <th className="text-warning" scope="col">Plazo</th>
                                    <th className="text-warning" scope="col">Nombre</th>
                                    <th className="text-warning" scope="col">Email</th>
                                    <th className="text-warning" scope="col">Teléfono</th>
                                    <th className="text-warning" scope="col">Proyecto</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {leads.map((lead, index) => (
                                    <tr key={lead.id || index}>
                                        <th className="text-white" scope="row">{lead.id || index + 1}</th>
                                        <td className="text-white">{lead.needs}</td>
                                        <td className="text-white">{lead.stage}</td>
                                        <td className="text-white">{lead.problemDescription}</td>
                                        <td className="text-white">{lead.idealTimeframe}</td>                                        
                                        <td className="text-white">{lead.personalData.fullName}</td>
                                        <td className="text-white">{lead.personalData.email}</td>
                                        <td className="text-white">{lead.personalData.phone}</td>
                                        <td className="text-white">{lead.personalData.projectName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                    }
                </div>
            </div>
        </div>
    )
}