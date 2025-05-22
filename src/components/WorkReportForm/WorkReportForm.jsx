import { useEffect, useState } from 'react'

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PrintPage from '../PrintPage/PrintPage';

import Swal from 'sweetalert2'

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import TextField from '@mui/material/TextField';

const WorkReportForm = () => {

    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    const [open, setOpen] = useState(false);

    const [dataForm, setDataForm] = useState({
        fecha: "31-05-2024",
        semestre: "2025-1",
        docente: "Wilmer Arley Patiño Perdomo",
        identificacion: "1116185791",
        tipoVinculacion: "Catedrático",
        dedicacion: "Tiempo Completo",
        cursos: [
            {
                cur_nombre: "Lógica y Algoritmos II - Grupo 1",
                cur_codigo: "9900037",
                cur_desempenios: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                cur_mejoramiento: "mejoramiento 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                cur_estrategias: "estrategias 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                cur_resultados: "resultados 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                cur_evidencias: ["https://www.google.com", "https://www.google.com"],
                cur_evaluacion: "evaluacion 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                cur_comparativo: "comparativo 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                cur_asesoria: "asesoria 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                cur_matriculados: 35,
                cur_aprobaron: 10,
                cur_habilitaron: 0,
                cur_perdieron: 25,
                cur_comentarios: "Comentarios 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            },
            {
                cur_nombre: "Español",
                cur_codigo: "ESP101",
                cur_desempenios: "DESEMPENIOS 1",
                cur_mejoramiento: "MEJORAMIENTO 1",
                cur_estrategias: "ESTRATEGIAS 1",
                cur_resultados: "RESULTADOS 1",
                cur_evidencias: ["EVIDENCIAS 1"],
                cur_evaluacion: "EVALUACION 1",
                cur_comparativo: "COMPARATIVO 1",
                cur_asesoria: "ASESORIA 1",
                cur_matriculados: 0,
                cur_aprobaron: 0,
                cur_habilitaron: 0,
                cur_perdieron: 0,
                cur_comentarios: "COMENTARIOS 1",
            },
        ],
        investigacion: [
            {
                inv_nombre: "Nombre investigación ",
                inv_linea: "Desarrollo 1 de Software",
                inv_fechaInicio: "2025-05-23",
                inv_fechaFin: "2025-05-23",
                inv_horasSemanales: 12,
                inv_conceptoComite: "Concepto 2Comentarios 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            },
            {
                inv_nombre: "2o Nombre investigación ",
                inv_linea: "Desarrollo 2 de Software",
                inv_fechaInicio: "2025-08-23",
                inv_fechaFin: "2025-09-23",
                inv_horasSemanales: 16,
                inv_conceptoComite: "Concepto 2Comentarios 1 lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            }
        ],
        proyeccionSocial: [
            {
                pro_nombre: "Uso de Tic 1",
                pro_horasSemanales: 22,
                pro_actividades: [
                    {
                        act_actividad: "Actividad Nombre Tic 1",
                        act_evidencia: ["Evidencia Uso de Tic 1"]
                    },
                ],
            }
        ],
        opcionesGrado: [
            {
                opc_tipo: "Trabajo de grado",
                opc_nombre: "Uso de Tic 1",
                opc_horasSemanales: 4,
                opc_avances: "Uso de Tic 1lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                opc_porcentajeAvances: 40,
                opc_estado: "Con modificaciones",
            }
        ],
        logros: "Uso de Tic 1",
        dificultades: "Uso de Tic 1",
        bibliografia: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const [tipoDocente, setTipoDocente] = useState("Ocasional");

    useEffect(() => {
        const fetchData = async () => {
            fetch('https://localhost:3000/api/test')
                .then(response => response.json())
                .then(data => {
                    setDataForm(data)
                    setIsLoading(false);
                    console.log('Data fetched:', data);
                })
                .catch(error => {
                    console.error('[ESTE ERROR SE DISPARA PORQUE LA URL DEL FETCH ES UNA VAINA X DE PRUEBA ]Error fetching data:', error);
                    setIsLoading(false);
                });
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (!dataForm.fecha) {
            setDataForm(prev => ({
                ...prev,
                fecha: dayjs().format('YYYY-MM-DD')
            }));
        }
    }, [dataForm.fecha]);

    const handleChangeTipoDocente = (event) => {
        setTipoDocente(event.target.value);
        // setDbConfig({ ...dbConfig, vinculacion: event.target.value });
    }

    const handleSaveData = (e) => {
        e.preventDefault();
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
                noValidate
                autoComplete="off"
                onSubmit={handleSaveData}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ m: 0, color: "#1876D1", fontWeight: "3px" }}>
                        Informe de Labor Académica
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Labor académica desarrollada durante el período académico.
                    </Typography>
                    <br />

                    <Box sx={{ width: '100%' }}>
                        {isLoading && <LinearProgress />}
                    </Box>
                    <Box
                        component="section"
                        sx={{ '& > :not(style)': { m: 2, width: '80%' } }}
                        noValidate
                        autoComplete="off"
                    >

                        {/* XXXXXXXXX INFORMACIÓIN GENERAL XXXXXXXXXXXX */}
                        <CardContent >
                            <Box sx={{ width: '100%' }}>
                                {isLoading && <LinearProgress />}
                            </Box>
                            <Typography gutterBottom variant="h5" component="div" sx={{ m: 0, color: "#1876D1", fontWeight: "3px" }}>
                                Información General
                            </Typography>
                            <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                Ingrese la información general del informe.
                            </Typography>
                            <Box
                                component="section"
                                sx={{ '& > :not(style)': { paddingTop: 0, m: 2, width: '100%' } }}
                                noValidate
                                autoComplete="off"
                            >
                                <div sx={{ '& > :not(style)': { width: '100%', display: "flex", flexDirection: "row" } }}>
                                    <DatePicker
                                        label="Fecha"
                                        value={dataForm.fecha ? dayjs(dataForm.fecha) : dayjs()}
                                        onChange={(nuevaFecha) => {
                                            if (nuevaFecha && dayjs(nuevaFecha).isValid()) {
                                                setDataForm(prev => ({
                                                    ...prev,
                                                    fecha: dayjs(nuevaFecha).format('YYYY-MM-DD')
                                                }));
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                    <TextField
                                        style={{ width: "20%", marginLeft: "20px" }}
                                        required
                                        id="outlined-controlled"
                                        label="Semestre"
                                        value={"" + dataForm.semestre}
                                        disabled={isLoading}
                                        multiline
                                        onChange={(event) => {
                                            setDataForm({ ...dataForm, semestre: event.target.value });
                                        }}
                                    />
                                </div>
                                <div sx={{ '& > :not(style)': { width: '100%', display: "flex", flexDirection: "row" } }}>
                                    <TextField
                                        style={{ width: "50%" }}
                                        required
                                        id="outlined-controlled"
                                        label="Docente"
                                        value={"" + dataForm.docente}
                                        disabled={isLoading}
                                        multiline
                                        onChange={(event) => {
                                            setDataForm({ ...dataForm, docente: event.target.value });
                                        }}
                                    />
                                    <TextField
                                        style={{ width: "20%", marginLeft: "20px" }}
                                        required
                                        id="outlined-controlled"
                                        label="Número de Identificación"
                                        value={"" + dataForm.identificacion}
                                        disabled={isLoading}
                                        multiline
                                        onChange={(event) => {
                                            setDataForm({ ...dataForm, identificacion: event.target.value });
                                        }}
                                    />
                                </div>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Tipo de Vinculación</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={dataForm.tipoVinculacion}
                                        onChange={(event) => {
                                            setDataForm({ ...dataForm, tipoVinculacion: event.target.value });
                                        }}
                                    >
                                        <FormControlLabel value="Carrera" control={<Radio />} label="Carrera" />
                                        <FormControlLabel value="Ocasional" control={<Radio />} label="Ocasional" />
                                        <FormControlLabel value="Catedrático" control={<Radio />} label="Catedrático" />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Dedicación</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={dataForm.dedicacion}
                                        onChange={(event) => {
                                            setDataForm({ ...dataForm, dedicacion: event.target.value });
                                        }}
                                    >
                                        <FormControlLabel value="Tiempo Completo" control={<Radio />} label="Tiempo Completo" />
                                        <FormControlLabel value="Medio Tiempo" control={<Radio />} label="Medio Tiempo" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            {/* XXXXXXXXX DOCENCIA XXXXXXXXXXXX */}
                            <Grid
                                size={{
                                    xs: 12,
                                    md: 6,
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ m: 0, color: "#1876D1", fontWeight: "3px" }}>
                                    Docencia
                                </Typography>
                                <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                    Adjuntar items a este apartado, según el número de cursos orientados.
                                </Typography>
                                <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                                    <Chip label="Nuevo registro" variant="outlined" onClick={async () => {
                                        const { value: text } = await Swal.fire({
                                            title: "Nombre del Curso",
                                            input: "textarea",
                                            inputLabel: "Ingrese el nombre del Curso que desea agregar (Puede emplear multiples líneas de texto)",
                                            inputPlaceholder: "Ingrese aquí el nombre del Curso...",
                                            inputAttributes: {
                                                "aria-label": "Type your message here"
                                            },
                                            showCancelButton: true
                                        });
                                        if (text) {
                                            Swal.fire(`Proceda a editar el Curso ${text}`);
                                            const nuevoCurso = [...dataForm.cursos];
                                            nuevoCurso.push(
                                                {
                                                    cur_nombre: text,
                                                    cur_codigo: "",
                                                    cur_desempenios: "",
                                                    cur_mejoramiento: "",
                                                    cur_estrategias: "",
                                                    cur_resultados: "",
                                                    cur_evidencias: [],
                                                    cur_evaluacion: "",
                                                    cur_comparativo: "",
                                                    cur_asesoria: "",
                                                    cur_matriculados: 0,
                                                    cur_aprobaron: 0,
                                                    cur_habilitaron: 0,
                                                    cur_perdieron: 0,
                                                    cur_comentarios: "",
                                                }
                                            )
                                            setDataForm(prev => ({
                                                ...prev,
                                                cursos: nuevoCurso
                                            }));
                                        }
                                    }} />
                                </Typography>

                                {
                                    dataForm.cursos.map((item, index) => {
                                        return (
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    <Tooltip title="Eliminar" sx={{ height: "50%", marginRight: 2 }}>
                                                        <IconButton onClick={() => {
                                                            Swal.fire({
                                                                title: `Esta seguro de eliminar el Curso: ${item.cur_nombre}?`,
                                                                text: "Una vez eliminado no podrá recuperar la información!",
                                                                icon: "warning",
                                                                showCancelButton: true,
                                                                confirmButtonColor: "#3085d6",
                                                                cancelButtonColor: "#d33",
                                                                cancelButtonText: "Cancelar",
                                                                confirmButtonText: "Si, borrarlo!"
                                                            }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    const nuevoCurso = (dataForm.cursos).filter(curso => curso.cur_nombre !== item.cur_nombre);
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        cursos: nuevoCurso
                                                                    }));
                                                                    Swal.fire({
                                                                        title: "Eliminado!",
                                                                        text: "El Curso fue eliminado exitosamente.",
                                                                        icon: "success"
                                                                    });
                                                                }
                                                            });
                                                        }}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <ListItemText
                                                        primary={item.cur_nombre || "[Sin nombre]"}
                                                        secondary={item.cur_codigo}
                                                    />
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Box
                                                        component="section"
                                                        sx={{ '& > :not(style)': { paddingTop: 0, m: 1, width: '100%' } }}
                                                        noValidate
                                                        autoComplete="off"
                                                        key={index}
                                                    >
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label="NOMBRE DEL CURSO"
                                                            value={"" + item.cur_nombre}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevosCursos = [...dataForm.cursos];
                                                                nuevosCursos[index].cur_nombre = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    cursos: nuevosCursos
                                                                }));
                                                            }}
                                                        />
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label="CÓDIGO"
                                                            value={"" + item.cur_codigo}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevosCursos = [...dataForm.cursos];
                                                                nuevosCursos[index].cur_codigo = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    cursos: nuevosCursos
                                                                }));
                                                            }}
                                                        />
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            1. Señale los desempeños y aspectos de mejoramiento con relación al desarrollo de las competencias planteadas en el microcurrículo:
                                                        </Typography>
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            1.1. Desempeños logrados desde las competencias específicas:
                                                        </Typography>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label=""
                                                            value={"" + item.cur_desempenios}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevosCursos = [...dataForm.cursos];
                                                                nuevosCursos[index].cur_desempenios = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    cursos: nuevosCursos
                                                                }));
                                                            }}
                                                        />
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            1.2. Aspectos de mejoramiento:
                                                        </Typography>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label=""
                                                            value={"" + item.cur_mejoramiento}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevosCursos = [...dataForm.cursos];
                                                                nuevosCursos[index].cur_mejoramiento = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    cursos: nuevosCursos
                                                                }));
                                                            }}
                                                        />
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            2. Señale brevemente las estrategias desarrolladas según los referentes pedagógicos planteados en el Proyecto Educativo del Programa (PEP):
                                                        </Typography>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label=""
                                                            value={"" + item.cur_estrategias}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevosCursos = [...dataForm.cursos];
                                                                nuevosCursos[index].cur_estrategias = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    cursos: nuevosCursos
                                                                }));
                                                            }}
                                                        />
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            3. Describa los Resultados de Aprendizaje logrados y sus evidencias:
                                                        </Typography>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label=""
                                                            value={"" + item.cur_resultados}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevosCursos = [...dataForm.cursos];
                                                                nuevosCursos[index].cur_resultados = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    cursos: nuevosCursos
                                                                }));
                                                            }}
                                                        />
                                                        <AccordionActions>
                                                            <Button>Cargar Imagen de Evidencia</Button>
                                                            <Button>Cargar Documento de Evidencia</Button>
                                                        </AccordionActions>
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            4. Describa las estrategias de evaluación implementadas para valorar los resultados aprendizaje:
                                                        </Typography>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label=""
                                                            value={"" + item.cur_evaluacion}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevosCursos = [...dataForm.cursos];
                                                                nuevosCursos[index].cur_evaluacion = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    cursos: nuevosCursos
                                                                }));
                                                            }}
                                                        />
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            5. Establezca un comparativo - si aplica, según el curso - entre lo programado versus lo ejecutado con relación a las Prácticas Pedagógicas:
                                                        </Typography>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label=""
                                                            value={"" + item.cur_comparativo}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevosCursos = [...dataForm.cursos];
                                                                nuevosCursos[index].cur_comparativo = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    cursos: nuevosCursos
                                                                }));
                                                            }}
                                                        />
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            6. Indique qué estrategias utilizó para la asesoría y acompañamiento de los estudiantes y los efectos alcanzados:
                                                        </Typography>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label=""
                                                            value={"" + item.cur_asesoria}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevosCursos = [...dataForm.cursos];
                                                                nuevosCursos[index].cur_asesoria = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    cursos: nuevosCursos
                                                                }));
                                                            }}
                                                        />
                                                        <div sx={{ '& > :not(style)': { width: '100%', display: "flex", flexDirection: "row", justifyContent: "space-between" } }}>
                                                            <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                                                                7. Resultados académicos de los estudiantes:
                                                            </Typography>
                                                            <TextField
                                                                style={{ width: "22%", marginLeft: "20px" }}
                                                                required
                                                                id="outlined-controlled"
                                                                label="No. Estudiantes"
                                                                value={"" + item.cur_matriculados}
                                                                disabled={isLoading}
                                                                multiline
                                                                onChange={(event) => {
                                                                    const nuevosCursos = [...dataForm.cursos];
                                                                    nuevosCursos[index].cur_matriculados = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        cursos: nuevosCursos
                                                                    }));
                                                                }}
                                                            />
                                                            <TextField
                                                                style={{ width: "22%", marginLeft: "20px" }}
                                                                required
                                                                id="outlined-controlled"
                                                                label="Aprobaron"
                                                                value={"" + item.cur_aprobaron}
                                                                disabled={isLoading}
                                                                multiline
                                                                onChange={(event) => {
                                                                    const nuevosCursos = [...dataForm.cursos];
                                                                    nuevosCursos[index].cur_aprobaron = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        cursos: nuevosCursos
                                                                    }));
                                                                }}
                                                            />
                                                            <TextField
                                                                style={{ width: "22%", marginLeft: "20px" }}
                                                                required
                                                                id="outlined-controlled"
                                                                label="Habilitaron"
                                                                value={"" + item.cur_habilitaron}
                                                                disabled={isLoading}
                                                                multiline
                                                                onChange={(event) => {
                                                                    const nuevosCursos = [...dataForm.cursos];
                                                                    nuevosCursos[index].cur_habilitaron = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        cursos: nuevosCursos
                                                                    }));
                                                                }}
                                                            />
                                                            <TextField
                                                                style={{ width: "22%", marginLeft: "20px" }}
                                                                required
                                                                id="outlined-controlled"
                                                                label="Perdieron"
                                                                value={"" + item.cur_perdieron}
                                                                disabled={isLoading}
                                                                multiline
                                                                onChange={(event) => {
                                                                    const nuevosCursos = [...dataForm.cursos];
                                                                    nuevosCursos[index].cur_perdieron = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        cursos: nuevosCursos
                                                                    }));
                                                                }}
                                                            />
                                                        </div>
                                                        <div style={{ marginLeft: "20px", width: "100%", display: "flex", flexDirection: "column" }}>
                                                            <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                                                                Comentarios:
                                                            </Typography>
                                                            <TextField
                                                                style={{ width: "95%" }}
                                                                required
                                                                id="outlined-controlled"
                                                                label=""
                                                                value={"" + item.cur_comentarios}
                                                                disabled={isLoading}
                                                                multiline
                                                                onChange={(event) => {
                                                                    const nuevosCursos = [...dataForm.cursos];
                                                                    nuevosCursos[index].cur_comentarios = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        cursos: nuevosCursos
                                                                    }));
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        )
                                    })
                                }
                            </Grid>

                            {/* XXXXXXXXX INVESTIGACIÓN XXXXXXXXXXXX */}
                            <Grid
                                sx={{ marginTop: "20px" }}
                                size={{
                                    xs: 12,
                                    md: 6,
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ m: 0, color: "#1876D1", fontWeight: "3px" }}>
                                    Investigación
                                </Typography>
                                <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                    Participación en proyectos de investigación adscritos a la Vicerectoría de Investigaciones.
                                </Typography>
                                <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                                    <Chip label="Nuevo registro" variant="outlined" onClick={async () => {
                                        const { value: text } = await Swal.fire({
                                            title: "Nombre del proyecto",
                                            input: "textarea",
                                            inputLabel: "Ingrese el nombre del Proyecto de Investigación (Puede emplear multiples líneas de texto)",
                                            inputPlaceholder: "Ingrese aquí el nombre del Proyecto...",
                                            inputAttributes: {
                                                "aria-label": "Type your message here"
                                            },
                                            showCancelButton: true
                                        });
                                        if (text) {
                                            Swal.fire(`Proceda a editar la actividad ${text}`);
                                            const nuevaInvestigacion = [...dataForm.investigacion];
                                            nuevaInvestigacion.push(
                                                {
                                                    inv_nombre: text,
                                                    inv_linea: "",
                                                    inv_fechaInicio: "",
                                                    inv_fechaFin: "",
                                                    inv_horasSemanales: 0,
                                                    inv_conceptoComite: "",
                                                }
                                            )
                                            setDataForm(prev => ({
                                                ...prev,
                                                investigacion: nuevaInvestigacion
                                            }));
                                        }
                                    }} />
                                </Typography>

                                {
                                    dataForm.investigacion.map((item, index) => {
                                        return (
                                            <Accordion key={index}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    <Tooltip title="Eliminar" sx={{ height: "50%", marginRight: 2 }}>
                                                        <IconButton onClick={() => {
                                                            Swal.fire({
                                                                title: `Esta seguro de eliminar el Proyecto de Investigación: ${item.inv_nombre}?`,
                                                                text: "Una vez eliminado no podrá recuperar la información!",
                                                                icon: "warning",
                                                                showCancelButton: true,
                                                                confirmButtonColor: "#3085d6",
                                                                cancelButtonColor: "#d33",
                                                                cancelButtonText: "Cancelar",
                                                                confirmButtonText: "Si, borrarlo!"
                                                            }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    const nuevaInvestigacion = (dataForm.investigacion).filter(investigacion => investigacion.inv_nombre !== item.inv_nombre);
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        investigacion: nuevaInvestigacion
                                                                    }));
                                                                    Swal.fire({
                                                                        title: "Eliminado!",
                                                                        text: "El Proyecto de Investigación fue eliminado exitosamente.",
                                                                        icon: "success"
                                                                    });
                                                                }
                                                            });
                                                        }}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <ListItemText
                                                        primary={item.inv_nombre || "[Sin nombre]"}
                                                        secondary={item.inv_linea}
                                                    />
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Box
                                                        component="section"
                                                        sx={{ '& > :not(style)': { paddingTop: 0, m: 1, width: '100%' } }}
                                                        noValidate
                                                        autoComplete="off"
                                                        key={index}
                                                    >
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label="Nombre del proyecto"
                                                            value={"" + item.inv_nombre}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevaInvestigacion = [...dataForm.investigacion];
                                                                nuevaInvestigacion[index].inv_nombre = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    investigacion: nuevaInvestigacion
                                                                }));
                                                            }}
                                                        />
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label="Línea de investigación"
                                                            value={"" + item.inv_linea}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevaInvestigacion = [...dataForm.investigacion];
                                                                nuevaInvestigacion[index].inv_linea = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    investigacion: nuevaInvestigacion
                                                                }));
                                                            }}
                                                        />
                                                        <div style={{ width: '100%', display: "flex", flexDirection: "row" }}>
                                                            <DatePicker
                                                                sx={{ width: "33%" }}
                                                                label="Fecha de inicio"
                                                                value={item.inv_fechaInicio ? dayjs(item.inv_fechaInicio) : dayjs()}
                                                                onChange={(nuevaFecha) => {
                                                                    if (nuevaFecha && dayjs(nuevaFecha).isValid()) {
                                                                        const nuevaInvestigacion = [...dataForm.investigacion];
                                                                        nuevaInvestigacion[index].inv_fechaInicio = dayjs(nuevaFecha).format('YYYY-MM-DD');
                                                                        setDataForm(prev => ({
                                                                            ...prev,
                                                                            investigacion: nuevaInvestigacion
                                                                        }));
                                                                    }
                                                                }}
                                                                renderInput={(params) => <TextField {...params} fullWidth />}
                                                            />
                                                            <DatePicker
                                                                sx={{ width: "33%", marginLeft: "20px" }}
                                                                label="Fecha de terminación"
                                                                value={item.inv_fechaFin ? dayjs(item.inv_fechaFin) : dayjs()}
                                                                onChange={(nuevaFecha) => {
                                                                    if (nuevaFecha && dayjs(nuevaFecha).isValid()) {
                                                                        const nuevaInvestigacion = [...dataForm.investigacion];
                                                                        nuevaInvestigacion[index].inv_fechaFin = dayjs(nuevaFecha).format('YYYY-MM-DD');
                                                                        setDataForm(prev => ({
                                                                            ...prev,
                                                                            investigacion: nuevaInvestigacion
                                                                        }));
                                                                    }
                                                                }}
                                                                renderInput={(params) => <TextField {...params} fullWidth />}
                                                            />
                                                            <TextField
                                                                sx={{ width: "33%", marginLeft: "20px" }}
                                                                required
                                                                id="outlined-controlled"
                                                                label="Horas de dedicación semanal"
                                                                value={"" + item.inv_horasSemanales}
                                                                disabled={isLoading}
                                                                multiline
                                                                onChange={(event) => {
                                                                    const nuevaInvestigacion = [...dataForm.investigacion];
                                                                    nuevaInvestigacion[index].inv_horasSemanales = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        investigacion: nuevaInvestigacion
                                                                    }));
                                                                }}
                                                            />
                                                        </div>
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            Anexar el concepto de evaluación emitido por el Comité de Investigaciones sobre su informe de investigación.
                                                        </Typography>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label=""
                                                            value={"" + item.inv_conceptoComite}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevaInvestigacion = [...dataForm.investigacion];
                                                                nuevaInvestigacion[index].inv_conceptoComite = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    investigacion: nuevaInvestigacion
                                                                }));
                                                            }}
                                                        />
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        )
                                    })
                                }
                            </Grid>
                            {/* XXXXXXXXX PROYECCIÓN SOCIAL XXXXXXXXXXXX */}
                            <Grid
                                sx={{ marginTop: "20px" }}
                                size={{
                                    xs: 12,
                                    md: 6,
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ m: 0, color: "#1876D1", fontWeight: "3px" }}>
                                    Proyección Social
                                </Typography>
                                <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                    Participación en proyectos de extensión o proyección social.
                                </Typography>
                                <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                                    <Chip label="Nuevo registro" variant="outlined" onClick={async () => {
                                        const { value: text } = await Swal.fire({
                                            title: "Nombre de la actividad",
                                            input: "textarea",
                                            inputLabel: "Ingrese el nombre de la actividad (Puede emplear multiples líneas de texto)",
                                            inputPlaceholder: "Ingrese aquí el nombre de la actividad...",
                                            inputAttributes: {
                                                "aria-label": "Type your message here"
                                            },
                                            showCancelButton: true
                                        });
                                        if (text) {
                                            Swal.fire(`Proceda a editar la actividad ${text}`);
                                            const nuevaProyeccionSocial = [...dataForm.proyeccionSocial];
                                            nuevaProyeccionSocial.push(
                                                {
                                                    pro_nombre: text,
                                                    pro_horasSemanales: 0,
                                                    pro_actividades: [
                                                        {
                                                            act_actividad: "",
                                                            act_evidencia: []
                                                        },
                                                    ],
                                                }
                                            )
                                            setDataForm(prev => ({
                                                ...prev,
                                                proyeccionSocial: nuevaProyeccionSocial
                                            }));
                                        }
                                    }} />
                                </Typography>
                                {
                                    dataForm.proyeccionSocial.map((item, index) => {
                                        return (
                                            <Accordion key={index}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    <Tooltip title="Eliminar" sx={{ height: "50%", marginRight: 2 }}>
                                                        <IconButton onClick={() => {
                                                            Swal.fire({
                                                                title: `Esta seguro de eliminar la actividad de proyección social: ${item.pro_nombre}?`,
                                                                text: "Una vez eliminado no podrá recuperar la información!",
                                                                icon: "warning",
                                                                showCancelButton: true,
                                                                confirmButtonColor: "#3085d6",
                                                                cancelButtonColor: "#d33",
                                                                cancelButtonText: "Cancelar",
                                                                confirmButtonText: "Si, borrarlo!"
                                                            }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    // const nuevaProyeccionSocial = [...dataForm.proyeccionSocial];
                                                                    const nuevaProyeccionSocial = (dataForm.proyeccionSocial).filter(proyecionSocial => proyecionSocial.pro_nombre !== item.pro_nombre);
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        proyeccionSocial: nuevaProyeccionSocial
                                                                    }));
                                                                    Swal.fire({
                                                                        title: "Eliminada!",
                                                                        text: "La actividad de proyección social fue eliminada exitosamente.",
                                                                        icon: "success"
                                                                    });
                                                                }
                                                            });
                                                        }}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <ListItemText
                                                        primary={item.pro_nombre || "[Sin nombre]"}
                                                        secondary={item.pro_horasSemanales + " horas semanales"}
                                                    />
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Box
                                                        component="section"
                                                        sx={{ '& > :not(style)': { paddingTop: 0, m: 1, width: '100%' } }}
                                                        noValidate
                                                        autoComplete="off"
                                                        key={index}
                                                    >
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label="Nombre de la Actividad"
                                                            value={"" + item.pro_nombre}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevaProyeccionSocial = [...dataForm.proyeccionSocial];
                                                                nuevaProyeccionSocial[index].pro_nombre = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    proyeccionSocial: nuevaProyeccionSocial
                                                                }));
                                                            }}
                                                        />
                                                        <TextField
                                                            style={{ width: "20%" }}
                                                            required
                                                            id="outlined-controlled"
                                                            label="Horas de dedicación semanal"
                                                            value={"" + item.pro_horasSemanales}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevaProyeccionSocial = [...dataForm.proyeccionSocial];
                                                                nuevaProyeccionSocial[index].pro_horasSemanales = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    proyeccionSocial: nuevaProyeccionSocial
                                                                }));
                                                            }}
                                                        />
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            Describa las actividades desarrolladas con sus respectivos soportes según el plan de acción.
                                                        </Typography>

                                                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                                            Anexos: Evidencias de actividades:
                                                        </Typography>
                                                        <List dense={dense}>
                                                            <ListItem
                                                                secondaryAction={
                                                                    <IconButton edge="end" aria-label="delete">
                                                                        <DeleteIcon />
                                                                    </IconButton>
                                                                }
                                                            >
                                                                <Tooltip title="Eliminar" sx={{ height: "50%", marginRight: 2 }}>
                                                                    <IconButton onClick={() => {
                                                                        Swal.fire({
                                                                            title: `Esta seguro de eliminar el Proyecto de Investigación: ${item.inv_nombre}?`,
                                                                            text: "Una vez eliminado no podrá recuperar la información!",
                                                                            icon: "warning",
                                                                            showCancelButton: true,
                                                                            confirmButtonColor: "#3085d6",
                                                                            cancelButtonColor: "#d33",
                                                                            cancelButtonText: "Cancelar",
                                                                            confirmButtonText: "Si, borrarlo!"
                                                                        }).then((result) => {
                                                                            if (result.isConfirmed) {
                                                                                const nuevaInvestigacion = (dataForm.investigacion).filter(investigacion => investigacion.inv_nombre !== item.inv_nombre);
                                                                                setDataForm(prev => ({
                                                                                    ...prev,
                                                                                    investigacion: nuevaInvestigacion
                                                                                }));
                                                                                Swal.fire({
                                                                                    title: "Eliminado!",
                                                                                    text: "El Proyecto de Investigación fue eliminado exitosamente.",
                                                                                    icon: "success"
                                                                                });
                                                                            }
                                                                        });
                                                                    }}>
                                                                        <DeleteIcon />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <ListItemAvatar>
                                                                    <Avatar>
                                                                        <FolderIcon />
                                                                    </Avatar>
                                                                </ListItemAvatar>
                                                                <ListItemText
                                                                    primary="Single-line item"
                                                                    secondary={secondary ? 'Secondary text' : null}
                                                                />
                                                            </ListItem>
                                                        </List>




                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label="Nombre de la Actividad"
                                                            value={"" + item.pro_actividades}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevaProyeccionSocial = [...dataForm.proyeccionSocial];
                                                                nuevaProyeccionSocial[index].pro_nombre = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    proyeccionSocial: nuevaProyeccionSocial
                                                                }));
                                                            }}
                                                        />
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        )
                                    })
                                }
                            </Grid>
                            {/* XXXXXXXXX OPCIONES DE GRADO XXXXXXXXXXXX */}
                            <Grid
                                sx={{ marginTop: "20px" }}
                                size={{
                                    xs: 12,
                                    md: 6,
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ m: 0, color: "#1876D1", fontWeight: "3px" }}>
                                    Opciones de Grado/Trabajos de Grado
                                </Typography>
                                <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                    Dirección de Opciones de Grado/Trabajos de Grado.
                                </Typography>
                                <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                                    <Chip label="Nuevo registro" variant="outlined" onClick={async () => {
                                        const { value: text } = await Swal.fire({
                                            title: "Nombre del proyecto",
                                            input: "textarea",
                                            inputLabel: "Ingrese el nombre del Proyecto de Opción de Grado (Puede emplear multiples líneas de texto)",
                                            inputPlaceholder: "Ingrese aquí el nombre del Proyecto...",
                                            inputAttributes: {
                                                "aria-label": "Type your message here"
                                            },
                                            showCancelButton: true
                                        });
                                        if (text) {
                                            Swal.fire(`Proceda a editar la actividad ${text}`);
                                            const nuevaOpcionGrado = [...dataForm.opcionesGrado];
                                            nuevaOpcionGrado.push(
                                                {
                                                    opc_tipo: "",
                                                    opc_nombre: text,
                                                    opc_horasSemanales: 0,
                                                    opc_avances: "",
                                                    opc_porcentajeAvances: 0,
                                                    opc_estado: "Aprobado",
                                                }
                                            )
                                            setDataForm(prev => ({
                                                ...prev,
                                                opcionesGrado: nuevaOpcionGrado
                                            }));
                                        }
                                    }} />
                                </Typography>

                                {
                                    dataForm.opcionesGrado.map((item, index) => {
                                        return (
                                            <Accordion key={index}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    <Tooltip title="Eliminar" sx={{ height: "50%", marginRight: 2 }}>
                                                        <IconButton onClick={() => {
                                                            Swal.fire({
                                                                title: `Esta seguro de eliminar el Proyecto de Opción de Grado: ${item.inv_nombre}?`,
                                                                text: "Una vez eliminado no podrá recuperar la información!",
                                                                icon: "warning",
                                                                showCancelButton: true,
                                                                confirmButtonColor: "#3085d6",
                                                                cancelButtonColor: "#d33",
                                                                cancelButtonText: "Cancelar",
                                                                confirmButtonText: "Si, borrarlo!"
                                                            }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    const nuevaOpcionGrado = (dataForm.opcionesGrado).filter(opcionesGrado => opcionesGrado.opc_nombre !== item.opc_nombre);
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        opcionesGrado: nuevaOpcionGrado
                                                                    }));
                                                                    Swal.fire({
                                                                        title: "Eliminado!",
                                                                        text: "El Proyecto de Opción de Grado fue eliminado exitosamente.",
                                                                        icon: "success"
                                                                    });
                                                                }
                                                            });
                                                        }}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <ListItemText
                                                        primary={item.opc_nombre || "[Sin nombre]"}
                                                        secondary={item.opc_tipo}
                                                    />
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Box
                                                        component="section"
                                                        sx={{ '& > :not(style)': { paddingTop: 0, m: 1, width: '100%' } }}
                                                        noValidate
                                                        autoComplete="off"
                                                        key={index}
                                                    >
                                                        <FormControl fullWidth>
                                                            <InputLabel id="demo-simple-select-label">Opción de Grado</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={item.opc_tipo}
                                                                label="Opción de Grado"
                                                                onChange={(event) => {
                                                                    const nuevaOpcion = [...dataForm.opcionesGrado];
                                                                    nuevaOpcion[index].opc_tipo = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        opcionesGrado: nuevaOpcion
                                                                    }));
                                                                }}
                                                            >
                                                                <MenuItem value={"Pasantía Nacional"}>Pasantía Nacional</MenuItem>
                                                                <MenuItem value={"Pasantía Internacional"}>Pasantía Internacional</MenuItem>
                                                                <MenuItem value={"Participación relevante en proyectos de investigación"}>Participación relevante en proyectos de investigación</MenuItem>
                                                                <MenuItem value={"Plan de negocios"}>Plan de negocios</MenuItem>
                                                                <MenuItem value={"Trabajo de grado"}>Trabajo de grado</MenuItem>
                                                                <MenuItem value={"Monografía"}>Monografía</MenuItem>
                                                                <MenuItem value={"Monografía jurídica"}>Monografía jurídica</MenuItem>
                                                                <MenuItem value={"Creaciones artísticas"}>Creaciones artísticas</MenuItem>
                                                                <MenuItem value={"Publicación resultado de investigación"}>Publicación resultado de investigación</MenuItem>
                                                                <MenuItem value={"Seminario de investigación"}>Seminario de investigación</MenuItem>
                                                                <MenuItem value={"Judicatura"}>Judicatura</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label="Nombre del proyecto"
                                                            value={"" + item.opc_nombre}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevaOpcion = [...dataForm.opcionesGrado];
                                                                nuevaOpcion[index].opc_nombre = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    opcionesGrado: nuevaOpcion
                                                                }));
                                                            }}
                                                        />
                                                        <div style={{ width: '100%', display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "20px" }}>
                                                            <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                                Horas de dedicación semanal
                                                            </Typography>
                                                            <TextField
                                                                style={{ width: "100px", marginLeft: "20px" }}
                                                                required
                                                                id="outlined-controlled"
                                                                label="Horas"
                                                                value={"" + item.opc_horasSemanales}
                                                                disabled={isLoading}
                                                                multiline
                                                                onChange={(event) => {
                                                                    const nuevaOpcion = [...dataForm.opcionesGrado];
                                                                    nuevaOpcion[index].opc_horasSemanales = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        opcionesGrado: nuevaOpcion
                                                                    }));
                                                                }}
                                                            />
                                                        </div>
                                                        <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                            Asesoría: Describa los avances en el proceso de dirección de acuerdo con el cronograma de trabajo establecido.
                                                        </Typography>
                                                        <TextField
                                                            required
                                                            id="outlined-controlled"
                                                            label="Asesoría:"
                                                            value={"" + item.opc_avances}
                                                            disabled={isLoading}
                                                            multiline
                                                            onChange={(event) => {
                                                                const nuevaOpcion = [...dataForm.opcionesGrado];
                                                                nuevaOpcion[index].opc_avances = event.target.value;
                                                                setDataForm(prev => ({
                                                                    ...prev,
                                                                    opcionesGrado: nuevaOpcion
                                                                }));
                                                            }}
                                                        />
                                                        <div style={{ width: '100%', display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "20px" }}>
                                                            <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                                ESTADO: Porcentaje de ejecución
                                                            </Typography>
                                                            <TextField
                                                                style={{ width: "100px", marginLeft: "20px" }}
                                                                type='number'
                                                                id="outlined-controlled"
                                                                label="%"
                                                                value={"" + item.opc_porcentajeAvances}
                                                                disabled={isLoading}
                                                                multiline
                                                                onChange={(event) => {
                                                                    const nuevaOpcion = [...dataForm.opcionesGrado];
                                                                    nuevaOpcion[index].opc_porcentajeAvances = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        opcionesGrado: nuevaOpcion
                                                                    }));
                                                                }}
                                                            />
                                                        </div>
                                                        <FormControl>
                                                            <FormLabel id="demo-row-radio-buttons-group-label">Estado actual</FormLabel>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                name="row-radio-buttons-group"
                                                                value={item.opc_estado}
                                                                onChange={(event) => {
                                                                    const nuevaOpcion = [...dataForm.opcionesGrado];
                                                                    nuevaOpcion[index].opc_estado = event.target.value;
                                                                    setDataForm(prev => ({
                                                                        ...prev,
                                                                        opc_estado: nuevaOpcion
                                                                    }));
                                                                }}
                                                            >
                                                                <FormControlLabel value="Aprobado" control={<Radio />} label="Aprobado" />
                                                                <FormControlLabel value="No aprobado" control={<Radio />} label="No aprobado" />
                                                                <FormControlLabel value="Con modificaciones" control={<Radio />} label="Con modificaciones" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        )
                                    })
                                }
                            </Grid>
                            {/* XXXXXXXXX OTRAS ACTIVIDADES XXXXXXXXXXXX */}
                            <Grid
                                sx={{ marginTop: "20px" }}
                                size={{
                                    xs: 12,
                                    md: 6,
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ m: 0, color: "#1876D1", fontWeight: "3px" }}>
                                    Otras Actividades Desarrolladas
                                </Typography>
                                <Typography className='PanelTest2' variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                    (Tutorías, Asesorías, Participación en eventos, Acreditación, Pruebas Saber Pro, etc.)
                                </Typography>
                                <Box
                                    component="section"
                                    sx={{ '& > :not(style)': { paddingTop: 0, m: 2, width: '100%' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        style={{ width: "100%" }}
                                        required
                                        id="outlined-controlled"
                                        label="Logros alcanzados"
                                        value={"" + dataForm.logros}
                                        disabled={isLoading}
                                        multiline
                                        onChange={(event) => {
                                            setDataForm({ ...dataForm, logros: event.target.value });
                                        }}
                                    />
                                    <TextField
                                        style={{ width: "100%" }}
                                        required
                                        id="outlined-controlled"
                                        label="Dificultades encontradas y manera de superarlas"
                                        value={"" + dataForm.dificultades}
                                        disabled={isLoading}
                                        multiline
                                        onChange={(event) => {
                                            setDataForm({ ...dataForm, dificultades: event.target.value });
                                        }}
                                    />
                                </Box>
                            </Grid>
                            {/* XXXXXXXXX BIBLIOGRAFÍA XXXXXXXXXXXX */}
                            <Grid
                                sx={{ marginTop: "20px" }}
                                size={{
                                    xs: 12,
                                    md: 6,
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ m: 0, color: "#1876D1", fontWeight: "3px" }}>
                                    Sugerencias de actualización bibliográfica
                                </Typography>
                                <Box
                                    component="section"
                                    sx={{ '& > :not(style)': { paddingTop: 0, m: 2, width: '100%' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        style={{ width: "100%" }}
                                        required
                                        id="outlined-controlled"
                                        label="Bibliiografía propuesta"
                                        value={"" + dataForm.bibliografia}
                                        disabled={isLoading}
                                        multiline
                                        onChange={(event) => {
                                            setDataForm({ ...dataForm, bibliografia: event.target.value });
                                        }}
                                    />                                    
                                </Box>
                            </Grid>
                        </CardContent>
                        <Button style={{ width: "300px" }} variant="outlined" startIcon={<PrintIcon />} onClick={() => setOpen(true)}>
                            Imprimir Formulario
                        </Button>
                        <Modal
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="modal-title"
                            aria-describedby="modal-description"
                        >
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 800,
                                height: "100vh",
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                                overflowY: 'auto',
                            }}>
                                {name}
                                <PDFDownloadLink document={<PrintPage data={dataForm} />} fileName="Convocatoria.pdf">
                                    {({ loading }) => (loading ? 'Generando PDF...' : '')}
                                </PDFDownloadLink>
                                <PDFViewer style={{ width: '100%', height: "100%", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                    <PrintPage data={dataForm} />
                                </PDFViewer>
                            </Box>
                        </Modal>
                        {/* <FormControl fullWidth>
                    <InputLabel required id="demo-simple-select-label2">Programa</InputLabel>
                    <Select
                        labelId="demo-simple-select-label2"
                        id="demo-simple-select2"
                        value="Test"
                        label="Programa"
                        onChange={handleChangeProgram}
                    >   
                        <MenuItem value={"Programa 1"}>PROGRAMA 1</MenuItem>
                        <MenuItem value={"Programa 2"}>PROGRAMA 2</MenuItem>
                        <MenuItem value={"Programa 3"}>PROGRAMA 3</MenuItem>
                        {rolFacultad.programas ? rolFacultad.programas.map((item) => {
                            return (<MenuItem value={item} key={item}>{item.toUpperCase()}</MenuItem>)
                        }) : <p>Cargando programas</p>}
                    </Select>
                </FormControl> */}
                        {/* <FormControl fullWidth>
                    <InputLabel required id="demo-simple-select-label3">Area del conocimiento</InputLabel>
                    <Select
                        labelId="demo-simple-select-label3"
                        id="demo-simple-select3"
                        value={areaSelected}
                        label="Area del conocimiento"
                        onChange={handleChangeAreas}
                    >
                        {areas.map((item) => {
                            return (<MenuItem value={item} key={item}>{item.toUpperCase()}</MenuItem>)
                        })}
                    </Select>
                </FormControl> */}
                        <FormControl sx={{ color: 'text.secondary' }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span style={{ margin: "10px" }}>Convocada por:</span>
                                {/* <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            // defaultValue="true"                                                                            
                            name="row-radio-buttons-group"
                            // defaultValue={"" + dbConfig.primera_vez}
                            value={"" + dbConfig.primera_vez}
                            defaultValue="true"
                            onChange={handleChangePrimeraVez}
                        >
                            <FormControlLabel value="true" control={<Radio />} label="Primera vez" />
                            <FormControlLabel value="false" control={<Radio />} label="Segunda vez" />
                        </RadioGroup> */}
                            </div>
                        </FormControl>
                    </Box>
                </CardContent>

            </Box>
        </LocalizationProvider>

    )
}

export default WorkReportForm