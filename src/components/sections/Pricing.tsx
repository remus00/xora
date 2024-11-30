import { useState } from 'react';
import CountUp from 'react-countup';
import { Element } from 'react-scroll';
import { plans } from '../../constants';
import { cn } from '../../utils/cn';
import Button from '../Button';

const Pricing = () => {
    const [monthly, setMonthly] = useState<boolean>(false);

    return (
        <section>
            <Element name="pricing">
                <div className="container">
                    <div className="pricing-head_before relative mx-auto max-w-960 border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
                        <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
                            Flexible pricing for teams of all sizes
                        </h3>
                        <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
                            <button
                                className={cn('pricing-head_btn', monthly && 'text-p4')}
                                onClick={() => setMonthly(true)}
                            >
                                Monthly
                            </button>
                            <button
                                className={cn('pricing-head_btn', !monthly && 'text-p4')}
                                onClick={() => setMonthly(false)}
                            >
                                Annual
                            </button>

                            <div
                                className={cn(
                                    'g4 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden rounded-14 shadow-400 transition-transform duration-500 before:h-100',

                                    !monthly && 'translate-x-full'
                                )}
                            />
                        </div>

                        <div className="pricing-bg">
                            <img
                                src="/images/bg-outlines.svg"
                                alt="bg-outline"
                                className="relative z-2"
                                width={960}
                                height={380}
                            />
                            <img
                                src="/images/bg-outlines-fill.png"
                                alt="bg-outline"
                                className="absolute inset-0 z-2 opacity-5 mix-blend-soft-light"
                                width={960}
                                height={380}
                            />
                        </div>
                    </div>

                    {/* PRICING-SECTION */}
                    <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
                        {plans.map((plan, index) => {
                            const isPrimaryPlan = index === 1;
                            return (
                                <div
                                    key={plan.id}
                                    className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
                                >
                                    {isPrimaryPlan && (
                                        <div className="g4 absolute left-0 right-0 top-0 z-1 h-330 rounded-tl-3xl rounded-tr-3xl" />
                                    )}
                                    <div
                                        className={cn(
                                            'absolute left-0 right-0 z-2 flex items-center justify-center',
                                            isPrimaryPlan ? '-top-6' : '-top-6 xl:-top-11'
                                        )}
                                    >
                                        <img
                                            src={plan.logo}
                                            alt={plan.title}
                                            className={cn(
                                                'object-contain drop-shadow-2xl',
                                                isPrimaryPlan
                                                    ? 'size-[120px]'
                                                    : 'size-[88px]'
                                            )}
                                        />
                                    </div>

                                    <div
                                        className={cn(
                                            'relative flex flex-col items-center',
                                            isPrimaryPlan ? 'pt-24' : 'pt-12'
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                'small-2 relative z-2 mx-auto mb-6 rounded-20 border-2 px-4 py-1.5 uppercase',
                                                isPrimaryPlan
                                                    ? 'border-p3 text-p3'
                                                    : 'border-p1 text-p1'
                                            )}
                                        >
                                            {plan.title}
                                        </div>

                                        <div className="relative z-2 flex items-center justify-center">
                                            <div
                                                className={cn(
                                                    'h-num flex items-start',
                                                    isPrimaryPlan ? 'text-p3' : 'text-p4'
                                                )}
                                            >
                                                $
                                                <CountUp
                                                    start={plan.priceMonthly}
                                                    end={
                                                        monthly
                                                            ? plan.priceMonthly
                                                            : plan.priceYearly
                                                    }
                                                    duration={0.4}
                                                    useEasing={false}
                                                    preserveValue
                                                />
                                            </div>
                                            <div className="small-1 relative top-3 ml-1 uppercase">
                                                / mo
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={cn(
                                            'body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4',
                                            isPrimaryPlan && 'border-b'
                                        )}
                                    >
                                        {plan.caption}
                                    </div>

                                    <ul className="mx-auto space-y-4 xl:px-7">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="relative flex items-center gap-5"
                                            >
                                                <img
                                                    src={`/images/check.png`}
                                                    alt="check"
                                                    className="size-10 object-contain"
                                                />
                                                <p className="flex-1">{feature}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-10 flex w-full justify-center">
                                        <Button icon={plan.icon}>Get started</Button>
                                    </div>

                                    {isPrimaryPlan && (
                                        <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                                            Limited time offer
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Pricing;
