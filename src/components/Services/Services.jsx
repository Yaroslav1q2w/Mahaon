import { forwardRef } from "react";
import {
	ServicesWrapper,
	TitleWrapper,
	Title,
	Slider,
	ServiceItem,
	ServiceTitle,
	ServiceText,
	NavButton,
	Icon,
	SliderButtons,
} from "./StyledServices";
import { ReactComponent as Icon1 } from "../../assets/images/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/images/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/images/icon3.svg";
import { ReactComponent as Icon5 } from "../../assets/images/icon5.svg";
import { ReactComponent as Icon6 } from "../../assets/images/icon6.svg";
import { ReactComponent as Icon7 } from "../../assets/images/icon7.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow-slider.svg";

import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Services = forwardRef((props, ref) => {
	return (
		<ServicesWrapper ref={ref}>
			<TitleWrapper>
				<Title>Послуги</Title>
				<SliderButtons>
					<NavButton className="swiper-button-prev">
						<ArrowIcon />
					</NavButton>
					<NavButton className="swiper-button-next">
						<ArrowIcon />
					</NavButton>
				</SliderButtons>
			</TitleWrapper>
			<Slider
				modules={[Navigation]}
				navigation={{
					prevEl: ".swiper-button-prev",
					nextEl: ".swiper-button-next",
				}}
				spaceBetween={30}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}>
				<SwiperSlide>
					<ServiceItem>
						<Icon>
							<Icon1 />
						</Icon>
						<ServiceTitle>Канал під ключ</ServiceTitle>
						<ServiceText>
							Повний пакет послуг для створення успішного телеграм каналу
						</ServiceText>
					</ServiceItem>
				</SwiperSlide>
				<SwiperSlide>
					<ServiceItem>
						<Icon>
							<Icon2 />
						</Icon>
						<ServiceTitle>Зовнішній трафік</ServiceTitle>
						<ServiceText>
							Трафік з TikTok, Instagram, Facebook та YouTube за допомогою
							партнерської CPA-мережі Terra
						</ServiceText>
					</ServiceItem>
				</SwiperSlide>
				<SwiperSlide>
					<ServiceItem>
						<Icon>
							<Icon3 />
						</Icon>
						<ServiceTitle>Telegram Ads</ServiceTitle>
						<ServiceText>
							Налаштовуємо рекламу в Telegram Ads для каналів та веб-сайтів
						</ServiceText>
					</ServiceItem>
				</SwiperSlide>
				<SwiperSlide>
					<ServiceItem>
						<Icon>
							<Icon5 />
						</Icon>
						<ServiceTitle>Медіабаїнг</ServiceTitle>
						<ServiceText>
							Купуємо рекламу в телеграм каналах. Оптом та з великими знижками
						</ServiceText>
					</ServiceItem>
				</SwiperSlide>
				<SwiperSlide>
					<ServiceItem>
						<Icon>
							<Icon6 />
						</Icon>
						<ServiceTitle>Контент-маркетинг</ServiceTitle>
						<ServiceText>
							Розробляємо контент-стратегію, контент-план та пишемо тексти які
							захоплюють увагу
						</ServiceText>
					</ServiceItem>
				</SwiperSlide>
				<SwiperSlide>
					<ServiceItem>
						<Icon>
							<Icon7 />
						</Icon>
						<ServiceTitle>Розробка чат-ботів</ServiceTitle>
						<ServiceText>
							Втілимо проект будь-якої складності: від простих рішень до
							сервісів з множинними інтеграціями
						</ServiceText>
					</ServiceItem>
				</SwiperSlide>
			</Slider>
		</ServicesWrapper>
	);
});

export default Services;
