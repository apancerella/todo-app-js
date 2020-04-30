import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../Form';
import FormItem from '../FormItem';

import './style.css';

const Content = (props) => {
	const items = useSelector((state) => state.items);

	return (
		<div className="app__content">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-9 col-lg-7 col-xl-6">
						<div className="card text-center">
							<div className="card-body">
								<h5 className="card-title">Welcome!</h5>
								<p className="card-text">
                  To get started, add some items to your list:
								</p>
								<div className="d-inline-block">
									<Form />
								</div>
							</div>
						</div>
					</div>
				</div>
				{
					items.length ? (
						<div className="row justify-content-center">
							<div className="col-12 col-md-9 col-lg-7 col-xl-6">
								<div className="content__todos">
									<ul className="list-group">
										{
											items.map((item, index) => (
												<div key={index.id} className="content__todos__li">
													<FormItem item={item} />
												</div>
											))
										}
									</ul>
								</div>
							</div>
						</div>
					) : null
				}
			</div>
		</div>
	);
};

export default Content;
