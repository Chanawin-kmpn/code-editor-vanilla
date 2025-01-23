import React, { ReactNode } from 'react';

interface VisuallyHiddenProps {
	children: ReactNode;
}

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
	return <span className="sr-only">{children}</span>;
};

export default VisuallyHidden;
