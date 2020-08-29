import React, { useCallback } from 'react';
import usePortal from 'react-cool-portal'

const useModal = (options = {}) => {
	const { Portal, isShow, ...rest } = usePortal({
		...options,
		defaultShow: false,
		internalShowHide: false,
	});


	const Modal = useCallback(
		({ isShow, children }) => (
			<Portal>
				<div className={`modal${isShow ? " modal-open" : ""}`} tabIndex={-1}>
					{children}
				</div>
			</Portal>
		),
		[]
	);
	return { Modal, isShow, ...rest };
};

export { useModal }