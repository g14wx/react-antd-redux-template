import DashboardLayout from "./layouts/dashboard.tsx";
import CounterComponent from "./features/counter/components/CounterComponent.tsx";

function App() {

    return (
        <>
            <DashboardLayout>
                <CounterComponent/>
            </DashboardLayout>
        </>
    )
}

export default App
