import React, { useCallback, useEffect, useState } from 'react';
import { FaPause, FaPlay, FaStop, FaFlag } from 'react-icons/fa';
import { MdLoop } from 'react-icons/md';

import { Container, GlassBox, GlassCircle, SelectType, ContainerTimer, Buttons, GlassSelect, StepContainer } from './styles';
import GlassButton from '../../components/GlassButton';

interface ITime {
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
}

interface IStep {
    miliTime: number;
    fullTime: ITime;
    diffTime: ITime;
}

const Timer: React.FC = () => {
    const [type, setType] = useState('countdown')
    const [firstTime, setFirsTime] = useState(60000) // milissegundo
    const [miliTime, setMiliTime] = useState(firstTime); // milissegundo
    const [intervalTime, setIntervalTime] = useState(1); // milissegundo
    const [refInterval, setRefInterval] = useState<NodeJS.Timeout>();
    const [timerLoop, setTimerLoop] = useState(false);
    const [targetTime, setTargetTime] = useState<Date>();
    const [steps, setSteps] = useState<IStep[]>([]);
    
    const [time, setTime] = useState<ITime>({
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0
    });

    const resetInterval = useCallback(() => {
        if(refInterval){
            clearInterval(refInterval);
            setRefInterval(undefined);
        }
    }, [refInterval]);

    const getDiffTime = useCallback(() => {
        let diff = miliTime;
        if(targetTime) {
            diff = targetTime.getTime() - new Date().getTime();
        } 
        
        if(diff < 0)
            diff = 0;
        return diff;
    }, [targetTime, miliTime]);

    const pauseTimer = useCallback(() => {
        resetInterval();
        setMiliTime(getDiffTime());
        setTargetTime(undefined);
    }, [resetInterval,getDiffTime]);

    const resetTimer = useCallback(() => {
        resetInterval();
        setTargetTime(undefined);
        if(type === 'countdown'){
            setMiliTime(firstTime);
        } else if(type === 'timer'){
            setMiliTime(0);
            setSteps([]);
        }
    }, [resetInterval, firstTime, type]);

    const pad = useCallback((n: number, z?: number, x?: number) => {
        z = z || 2;
        let num = ('00' + n).slice(-z);
        if(x) {
            num = num.slice(0,x);
        } 
        return num;
    }, []); 

    const formatTime = useCallback((s) => {
            // var s = miliTime;
            var milliseconds = s % 1000;
            s = (s - milliseconds) / 1000;
            var seconds = s % 60;
            s = (s - seconds) / 60;
            var minutes = s % 60;
            var hours = (s - minutes) / 60;

        const newTime: ITime  = {
            milliseconds,
            seconds,
            minutes,
            hours
        }
        return newTime;
    }, []);

    const tick = useCallback((type: string) => {
        if(type === 'countdown'){
            setMiliTime(prev => prev - 1);
        } else if (type === 'timer'){
            setMiliTime(prev => prev + 10);
        }
    }, []);

    const startTimer = useCallback((event, initTime ?: number) => {
        if(type === 'countdown'){
            if(miliTime <= 0)
                setMiliTime(firstTime);
    
            const startTime = initTime ? initTime : miliTime; 
    
            const target = new Date(new Date().getTime() + startTime); 
            setTargetTime(target);
    
            if(!refInterval){
                const intervalo = setInterval(() => {
                    tick('countdown')
                }, intervalTime);
                setRefInterval(intervalo);
            }
        }
        else if(type === 'timer'){
            if(!refInterval){
                const intervalo = setInterval(() => {
                    tick('timer')
                }, intervalTime);
                setRefInterval(intervalo);
            }
        }
    }, [miliTime, refInterval, intervalTime, firstTime, type, tick]);

    const changeFirstTime = useCallback((newTime: number) => {
        setFirsTime(newTime);
        resetInterval();
        setTargetTime(undefined);
        setMiliTime(newTime);
    }, [resetInterval]);

    const changeType = useCallback((newValue) => {
        setType(newValue);
        if(newValue === 'countdown'){
            setIntervalTime(1);
            setMiliTime(firstTime);
        } else if (newValue === 'timer'){
            setIntervalTime(10);
            setMiliTime(0);
        }
    }, [firstTime]);

    const marckStep = useCallback(() => {
        const previousStep = steps[(steps.length - 1)];
        let previousTime = 0;
        if(previousStep)
            previousTime = previousStep.miliTime ? previousStep.miliTime : 0;

        const diff = miliTime - previousTime;

        const newStep: IStep = {
            miliTime: miliTime,
            fullTime: formatTime(miliTime),
            diffTime: formatTime(diff)
        }

        setSteps((prev) => [...prev, newStep]);
    }, [miliTime, steps, formatTime]);

    useEffect(() => {
        if(type === 'countdown'){
            let diff = getDiffTime();
            setTime(formatTime(diff));

            if(diff === 0) {
                setTargetTime(undefined);
                if(timerLoop){
                    startTimer(null, firstTime);
                } else {
                    resetInterval();
                }
            }
        } else if (type === 'timer'){
            setTime(formatTime(miliTime));
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [miliTime])


    return (
        <>
            <Container>
                <GlassCircle size={110} top={240} right={540} angle={45}/>
                <GlassCircle size={120} top={-60} right={70} angle={45}/>
                <GlassCircle size={200} top={150} right={-100} angle={45}/>
                <GlassBox>
                    <div>
                        <SelectType style={{marginTop: '30px'}}>
                            <select name="types" onChange={(e) => changeType(e.target.value)}>
                                <option value="countdown">countdown</option>
                                <option value="timer">Stopwatch</option>
                            </select>
                            <div className="select_arrow"/>
                        </SelectType>
                    </div>
                    <ContainerTimer>
                        <div>
                            <p>{pad(time.hours)}</p>
                            <p>HORAS</p>
                        </div>
                        <p>:</p>
                        <div>
                            <p>{pad(time.minutes)}</p>
                            <p>MINUTOS</p>
                        </div>
                        <p>:</p>
                        <div>
                            <p>{pad(time.seconds)}</p>
                            <p>SEGUNDOS</p>
                        </div>
                        <p>:</p>
                        <div>
                            <p>{pad(time.milliseconds, 3, 2)}</p>
                            <p>MILÉSIMOS</p>
                        </div>
                    </ContainerTimer>
                    <Buttons>
                        <div>
                            {type === 'countdown' && 
                                <>
                                    <GlassSelect onChange={(e) => changeFirstTime(Number(e.target.value))}>
                                        <option value="60000">&nbsp;1m</option>
                                        <option value="300000">&nbsp;5m</option>
                                        <option value="600000">&nbsp;10m</option>
                                        <option value="900000">&nbsp;15m</option>
                                    </GlassSelect>
                                    <GlassButton icon={MdLoop} iconSize={40} spin={timerLoop} onClick={() => {setTimerLoop((prev) => !prev)}}/>
                                </>
                            }
                            {type === 'timer' && 
                                <GlassButton icon={FaFlag} iconSize={27} onClick={marckStep}/>
                            }
                        </div>
                        <div>
                            {!refInterval && 
                                <GlassButton 
                                    size={65}
                                    icon={FaPlay} 
                                    marginLeft={5} 
                                    iconSize={35} 
                                    onClick={startTimer}
                                /> 
                            }
                            {refInterval && 
                                <GlassButton 
                                    size={65}
                                    iconSize={35} 
                                    icon={FaPause} 
                                    onClick={pauseTimer}
                                />
                            }
                        </div>
                        <div>
                            <GlassButton icon={FaStop} onClick={resetTimer}/>
                            {/* <GlassButton icon={FaFlag} iconSize={25}/> */}
                        </div>
                    </Buttons>
                </GlassBox>
                <GlassCircle size={200} top={-100} right={490} angle={235}/>
                <StepContainer>
                    {steps.slice(0).reverse().map((step, index) => (
                        <div key={String(index)}>
                            <p> <FaFlag size={15}/> {(steps.length - index)}</p>
                            <p>+ {pad(step.diffTime.hours)}:{pad(step.diffTime.minutes)}:{pad(step.diffTime.seconds)}:{pad(step.diffTime.milliseconds, 3)}</p>
                            <p>{pad(step.fullTime.hours)}:{pad(step.fullTime.minutes)}:{pad(step.fullTime.seconds)}:{pad(step.fullTime.milliseconds, 3)}</p>
                        </div>
                    ))}

                </StepContainer>
            </Container>
        </>
    )
};

export default Timer;
