import React from "react";
import { Container, Row } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
import { FaDrawPolygon } from "react-icons/fa";
import Heading from "./Heading/Heading"

export default function Services() {
	return (
		<div className="bg-orange">
			<div class="container ">
				<Heading title="Our Digital Ecosystem" white="true"/>
				<Row className="text-center py-5 d-flex justify-content-around">
					<div className="col-sm-4 service">
						<MdAddShoppingCart />
						<h3>E-Commerce</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
							architecto laudantium ullam harum possimus
						</p>
					</div>
					<div className="col-sm-4 service">
						<AiFillWechat />
						<h3>Digital Marketing</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
							architecto laudantium ullam harum possimus
						</p>
					</div>
					<div className="col-sm-4 service">
						<FaDrawPolygon />
						<h3>Web Development</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
							architecto laudantium ullam harum possimus
						</p>
					</div>
				</Row>
			</div>
		</div>
	);
}
