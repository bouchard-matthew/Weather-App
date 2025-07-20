import { useClientGate } from '../../Hooks/useClientGate';

interface ClientGateProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export const ClientGate = ({ children, fallback = null }: ClientGateProps) => {
    const isClientReady = useClientGate();

    if (!isClientReady) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
};

export default ClientGate;