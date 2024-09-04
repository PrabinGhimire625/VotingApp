// src/pages/PartyCandidatesPage.jsx

import React, { useState } from 'react';
import Party from '../Party';
import Singleparty from '../singleParty/Singleparty';

const PartyCandidatesPage = () => {
    const [selectedPartyId, setSelectedPartyId] = useState(null);

    const handlePartySelect = (partyId) => {
        setSelectedPartyId(partyId);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <Party onSelect={handlePartySelect} />
                {selectedPartyId && <Singleparty selectedPartyId={selectedPartyId} />}
            </div>
        </div>
    );
};

export default PartyCandidatesPage;
