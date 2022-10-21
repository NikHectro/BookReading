import styled from '@emotion/styled';
import mobile from 'Assets/loginRegister/mobile/mobile.jpg';
import mobile2x from 'Assets/loginRegister/mobile/mobile@2x.jpg';
import tablet from 'Assets/loginRegister/tablet/tablet.jpg';
import tablet2x from 'Assets/loginRegister/tablet/tablet@2x.jpg';
import desktop from 'Assets/loginRegister/desktop/desktop.jpg';
import desktop2x from 'Assets/loginRegister/desktop/desktop@2x.jpg';

import marks from 'Assets/svg/marks.svg';

export const Wrapper = styled.div`
	@media screen and (min-width: 1280px) {
		display: flex;
	}
`;

export const FormBox = styled.div`
	padding-top: 32px;
	padding-bottom: 44px;
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
	background-image: linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
		url(${mobile});
	@media screen and (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
		background-image: linear-gradient(
				rgba(9, 30, 63, 0.8),
				rgba(9, 30, 63, 0.8)
			),
			url(${mobile2x});
	}
	@media screen and (min-width: 768px) {
		padding-top: 64px;
		padding-bottom: 65px;
		background-image: linear-gradient(
				rgba(9, 30, 63, 0.8),
				rgba(9, 30, 63, 0.8)
			),
			url(${tablet});
		@media screen and (min-device-pixel-ratio: 2),
			(min-resolution: 192dpi),
			(min-resolution: 2dppx) {
			background-image: linear-gradient(
					rgba(9, 30, 63, 0.8),
					rgba(9, 30, 63, 0.8)
				),
				url(${tablet2x});
		}
	}
	@media screen and (min-width: 1280px) {
		padding: 0;
		width: 549px;
		height: 790px;
		background-image: linear-gradient(
				rgba(9, 30, 63, 0.8),
				rgba(9, 30, 63, 0.8)
			),
			url(${desktop});
		@media screen and (min-device-pixel-ratio: 2),
			(min-resolution: 192dpi),
			(min-resolution: 2dppx) {
			background-image: linear-gradient(
					rgba(9, 30, 63, 0.8),
					rgba(9, 30, 63, 0.8)
				),
				url(${desktop2x});
		}
	}
	background-repeat: no-repeat;
	background-size: cover;
`;

export const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: 768px) {
		padding-top: 64px;
		padding-bottom: 109px;
	}
	@media screen and (min-width: 1280px) {
		padding-top: 206px;
		padding-left: 167px;
		padding-bottom: 352px;
	}
`;

export const Mark = styled.div`
	width: 27px;
	height: 70px;
	@media screen and (min-width: 768px) {
		width: 31px;
		height: 93px;
	}
	background-image: url(${marks});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`;

export const Text = styled.p`
	width: 229px;
	height: 80px;
	left: 46px;
	top: 507px;
	font-size: 13px;
	line-height: 16px;
	margin-bottom: 16px;
	@media screen and (min-width: 768px) {
		width: 526px;
		height: 152px;
		line-height: 38px;
		font-size: 24px;
		line-height: 40px;
		margin-bottom: 20px;
	}
	@media screen and (min-width: 1280px) {
		width: 397px;
		height: 200px;
	}
	font-style: normal;
	font-weight: 500;
	text-align: center;
	color: #242a37;
`;

export const Border = styled.div`
	width: 100px;
	height: 0px;
	left: 110px;
	top: 603px;
	margin-bottom: 12px;
	@media screen and (min-width: 768px) {
		width: 150px;
		height: 0px;
	}
	border-bottom: 1px solid rgba(36, 42, 55, 0.5);
`;

export const Author = styled.p`
	font-size: 14px;
	line-height: 17px;
	@media screen and (min-width: 768px) {
		font-size: 20px;
		line-height: 24px;
	}
	font-style: normal;
	font-weight: 500;
	text-align: center;
	color: #898f9f;
`;