import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WaitlistContextType {
    isOpen: boolean;
    openWaitlist: () => void;
    closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const WaitlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openWaitlist = () => setIsOpen(true);
    const closeWaitlist = () => setIsOpen(false);

    return (
        <WaitlistContext.Provider value={{ isOpen, openWaitlist, closeWaitlist }}>
            {children}
        </WaitlistContext.Provider>
    );
};

export const useWaitlist = () => {
    const context = useContext(WaitlistContext);
    if (context === undefined) {
        throw new Error('useWaitlist must be used within a WaitlistProvider');
    }
    return context;
};
